const express = require("express");

const {validateBody, authenticate} = require('../../middewares');

const {schemas} = require("../../models/user");

const ctrl = require("../../controllers/auth")

const router = express.Router();

// signup
router.post('/users/register', validateBody(schemas.registerSchema), ctrl.register);

// sign in 
router.post('/users/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/users/current', authenticate, ctrl.getCurrent);

router.post('/users/logout', authenticate, ctrl.logout);


module.exports = router;
