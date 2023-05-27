const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/sign-up', AbortController.signUp);
authRouter.post('/sign-in', AbortController.signIn);
authRouter.post('/refresh', AbortController.refresh);

module.exports = authRouter;
