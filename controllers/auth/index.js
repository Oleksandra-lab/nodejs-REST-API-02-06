const { ctrlWrapper} = require("../../helpers");

const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscriptionStatus = require('./updateSubscriptionStatus');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports ={
    register: ctrlWrapper(register),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscriptionStatus: ctrlWrapper(updateSubscriptionStatus),
    updateAvatar: ctrlWrapper(updateAvatar),
}
