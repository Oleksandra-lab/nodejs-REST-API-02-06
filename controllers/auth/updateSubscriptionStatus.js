const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateSubscriptionStatus = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  if (
    !subscription ||
    subscription !== "starter" &&
      subscription !== "pro" &&
      subscription !== "business"
  ) {
    throw HttpError(400, "Subscription status is required.");
  }
   const updatedStatusUser = await User.findByIdAndUpdate(_id, {subscription});

   if(!updatedStatusUser){
    throw HttpError(401, "Not found.");
  }
  res.status(201).json({
    email: updatedStatusUser.email,
    subscription: updatedStatusUser.subscription,
})
};

module.exports = updateSubscriptionStatus;
