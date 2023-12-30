const { ctrlWrapper} = require("../../helpers");

const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscriptionStatus = require('./updateSubscriptionStatus')

module.exports ={
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateSubscriptionStatus: ctrlWrapper(updateSubscriptionStatus),
}
