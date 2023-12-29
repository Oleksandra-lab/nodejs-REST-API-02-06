// const services = require("../models/contacts");

// const { HttpError, ctrlWrapper } = require("../helpers");

// const getAllContacts = async (req, res) => {
//   const result = await services.listContacts(req.user);
  
//   res.json(result);
// };

// const getContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await services.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const addNewContact = async (req, res) => {
//   const result = await services.addContact(req.body);
//   res.status(201).json(result);
// };

// const updateContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await services.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await services.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({
//     message: "Contact deleted",
//   });
// };

// module.exports = {
//   getAllContacts: ctrlWrapper(getAllContacts),
//   getContactById: ctrlWrapper(getContactById),
//   addNewContact: ctrlWrapper(addNewContact),
//   updateContactById: ctrlWrapper(updateContactById),
//   deleteContactById: ctrlWrapper(deleteContactById),
// };
