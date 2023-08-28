import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Your Database connected Successfully");
  } catch (e) {
    console.log(e, " error in connecting DataBase");
  }
};


