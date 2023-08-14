const { Contact } = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = getById;
