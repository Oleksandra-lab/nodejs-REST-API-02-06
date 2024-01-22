const express = require("express");

const {validateBody, authenticate, upload} = require('../../middewares');

const {schemas} = require("../../models/user");

const ctrl = require("../../controllers/auth");


const router = express.Router();

// signup
router.post('/signup', validateBody(schemas.registerSchema), ctrl.register);

router.get('/verify/:verificationToken', ctrl.verifyEmail);

router.post('/verify', validateBody(schemas.emailSchema), ctrl.resendVerifyEmail)

// sign in 
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

// router.patch('/:id', authenticate, ctrl.updateSubscriptionStatus);

router.patch('/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatar);


module.exports = router;
