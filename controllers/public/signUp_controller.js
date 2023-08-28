
import { User } from "../../models/userModel.js";
import { mailerFunc } from "../../util/mailerFunc.js";
import { encryptPwdFunc } from "../../util/passwordHelperFunc.js";
import { signTokenFunc } from "../../util/tokenFunc.js";


export const signupHandler = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res
        .status(400)
        .send({ msg: "No Empty values allowed", type: "error" });
    }
    const userAlreadyAvailable = await User.findOne({ email });
    if (userAlreadyAvailable) {
      return res
        .status(403)
        .send({ msg: "Account already exists", type: "error" });
    }
    const hashedPwd = await encryptPwdFunc(password);
    const createdUser = await User.create({ email, name, password: hashedPwd });
    if (!createdUser) {
      return res.status(500).send({
        msg: "couldnot create user - server problem maybe",
        type: "error",
      });
    }
    const tokenPayLoad = { email, id: createdUser._id, name };
    const token = signTokenFunc(tokenPayLoad);

    const mailDetails = {
      toAddress: createdUser.email,
      mailSubject: "Account Activation Link",
      mailContent: `Welcome ${createdUser.name}!, just click the following link to activate your Account  -   
        ${process.env.CLIENT_URL_ACCOUNTACTIVATION}/${token}`,
    };
    await mailerFunc(mailDetails);

    res.send({ token, user: tokenPayLoad, type: "success" });
  } catch (e) {
    console.log(e.message, " err in signupHandler");
    res.status(500).send({ msg: "server issue", type: "error" });
  }
};

