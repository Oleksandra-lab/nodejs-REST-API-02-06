const Contact = require("./contactModel");

const listContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await Contact.findOne({ _id: contactId });
  return contact;
};

const removeContact = async (contactId) => {
  const deletedContact = await Contact.findOneAndDelete({ _id: contactId });
  return deletedContact;
};

const addContact = async (data) => {
  
  const newContact = await Contact.create(data)
  return newContact
};

const updateContact = async (contactId, data) => {
  const updatedContact = await Contact.findByIdAndUpdate({_id: contactId}, data, {new: true});
  return updatedContact;
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
