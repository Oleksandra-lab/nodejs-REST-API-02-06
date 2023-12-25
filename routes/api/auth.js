const express = require("express");

const {validateBody} = require('../../middewares');

const {schemas} = require("../../models/user");

const ctrl = require("../../controllers/auth")

const router = express.Router();

// signup
router.post('/users/register', validateBody(schemas.registerSchema), ctrl.register);

// sign in 
router.post('/users/login', validateBody(schemas.loginSchema), ctrl.login);


module.exports = router;
