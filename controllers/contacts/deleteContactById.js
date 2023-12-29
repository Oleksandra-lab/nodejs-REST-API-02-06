const { ctrlWrapper, HttpError } = require("../../helpers");
const Contact = require("../../models/contactModel");

const deleteContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findOneAndDelete(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({
      message: "Contact deleted",
    });
  };


  module.exports = {
    deleteContactById: ctrlWrapper(deleteContactById),
  }