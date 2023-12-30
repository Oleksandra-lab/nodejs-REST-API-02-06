const express = require("express");

const {validateBody, authenticate} = require('../../middewares');

const {schemas} = require("../../models/user");

const ctrl = require("../../controllers/auth");


const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

// sign in 
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/:id', authenticate, ctrl.updateSubscriptionStatus);


module.exports = router;
