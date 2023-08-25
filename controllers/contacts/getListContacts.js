const { Contact } = require("../../models/contacts");
const paginate = require("mongoose-paginate");

const getListContacts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const favorite = req.query.favorite;

  const filter = {};

  const options = {
    page,
    limit,
    sort: { name: 1 },
  };

  if (favorite !== undefined) {
    filter.favorite = favorite;
  }

  const result = await Contact.paginate(filter, options);

  res.json(result);
};

module.exports = getListContacts;
