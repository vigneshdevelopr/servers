import express from 'express'
const router = express.Router();

import { emailActivationHandler } from '../controllers/public/emailActivation_controller.js';
import { forgotPasswordHandler } from '../controllers/public/forgotPassword_controller.js';
import { resetPasswordHandler } from '../controllers/public/resetPassword_controller.js';
import { signinHandler } from '../controllers/public/signIn_controller.js';
import { signupHandler } from '../controllers/public/signUp_controller.js';




router.get("/", (req, res) => {
  res.json("Auth Working");
});

router.post("/signup", signupHandler); //name,password,email
router.post("/signin", signinHandler); //password,email
router.post("/forgot-password", forgotPasswordHandler); //email
router.post("/reset-password", resetPasswordHandler); //newPassword
router.post("/emailActivation", emailActivationHandler); //activationId

export const auth_route = router;