import bcrypt from 'bcrypt'

export const encryptPwdFunc = async (originalPwd) => {
  const hashedPwd = await bcrypt.hash(originalPwd, 12);
  return hashedPwd;
};
export const decryptPwdFunc = async (plainPwd, hashedPwd) => {
  const isMatch = await bcrypt.compare(plainPwd, hashedPwd);
  return isMatch;
};

