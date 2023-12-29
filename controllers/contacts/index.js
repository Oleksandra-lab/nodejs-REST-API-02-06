const { getAllContacts } = require("./getAllContacts");
const { getContactById } = require("./getContactById");
const { addNewContact } = require("./addNewContact");
const { updateContactById } = require("./updateContactById");
const {deleteContactById} = require("./deleteContactById")

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  updateContactById,
  deleteContactById,
};
