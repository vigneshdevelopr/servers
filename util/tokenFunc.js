import jwt from 'jsonwebtoken'

export const signTokenFunc = (payload) => {
  try {
    return jwt.sign(payload, process.env.token_Secret, { expiresIn: "1h" });
  } catch (e) {
    console.log(e.message, " err in sign token");
    return null;
  }
};
export const verifyTokenFunc = (token) => {
  try {
    const isVerified = jwt.verify(token, process.env.token_Secret);
    return isVerified;
  } catch (e) {
    console.log(e.message, "err in token verify");
    return null;
  }
};

