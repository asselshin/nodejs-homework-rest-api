const { Contact } = require("../../models/contacts");
const paginate = require("mongoose-paginate");

// пагинация
// const getListContacts = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 5;

//   const options = {
//     page,
//     limit,
//     sort: { name: 1 },
//   };

//   const result = await Contact.paginate({}, options);

//   res.json(result);
// };

// фильтрация по favorite
// const getListContacts = async (req, res) => {
//   const favorite = req.query.favorite;

//   const filter = {};

//   if (favorite !== undefined) {
//     filter.favorite = favorite;
//   }
//   const result = await Contact.find(filter);

//   res.json(result);
// };

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
