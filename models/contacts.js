// const Contact = require("./contactModel");

// // const listContacts = async (req) => {
// //   // console.log(req);
// //   const {_id: owner} = req.user;
  
// //   const {page=1, limit=20} = req.query;
// //   const skip = (page - 1)* limit;
// //   const contacts = await Contact.find({owner}, {skip, limit}). populate("owner", "email subscriptions" );
// //   return contacts;
// // };

// // const getContactById = async (contactId) => {
// //   const contact = await Contact.findOne({ _id: contactId });
// //   return contact;
// // };

// const removeContact = async (contactId) => {
//   const deletedContact = await Contact.findOneAndDelete({ _id: contactId });
//   return deletedContact;
// };

// const addContact = async (req, res) => {
//   const{_id: owner}=req.user;  
//   const newContact = await Contact.create(...req.body, owner)
//   return newContact
// };

// const updateContact = async (contactId, data) => {
//   const updatedContact = await Contact.findByIdAndUpdate({_id: contactId}, data, {new: true});
//   return updatedContact;
// };
// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
