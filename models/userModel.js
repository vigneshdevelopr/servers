import mongoose from 'mongoose'
const schema = mongoose.Schema;

const userSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  idActivated: {
    type: Boolean,
    default: false,
  },
  pwdResetCode: {
    type: String,
    default: undefined,
  },
 
});

export const User = mongoose.model("User", userSchema, "userCollection");
