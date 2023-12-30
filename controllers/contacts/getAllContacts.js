const { ctrlWrapper } = require("../../helpers");
const Contact = require("../../models/contactModel");

// const getAllContacts = async (req, res) => {
//   console.log(req.user);
//   const { _id: owner } = req.user;

//   const { page = 1, limit = 20 } = req.query;
//   const skip = (page - 1) * limit;

//   const result = await Contact.find({ owner }, { skip, limit }).populate(
//     "owner",
//     "email subscriptions"
//   );
//   res.json(result);
// };

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 20, favorite = null } = req.query;
  const skip = (page - 1) * limit;

  const filter = favorite === null ? { owner } : { favorite, owner };

  const result = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email");
  res.json(result);
};


module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
