const getListContacts = require("./getListContacts");
const getById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const removeContact = require("./removeContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getListContacts,
  getById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
