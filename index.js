import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
import { redirectUrl } from "./routes/urlRedirect_route.js";
import { auth_route } from "./routes/auth_route.js";
import { urlPrivate_route } from "./routes/urlPrivate_route.js";
import { connectDB } from "./db/db_connection.js";

const port = process.env.port
const app = express();
connectDB()

app.use(express.json())
app.use("/", redirectUrl);
app.use("/api/auth", auth_route);
app.use("/api/urlPrivate", urlPrivate_route);
const allowedOrigins = [
    'https://shortlinker.netlify.app',
  ];
  
  app.use(
    cors({
      origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      allowedHeaders: ["my-custom-header"],
      methods: ["GET", "POST"],

    })
  );
  


app.get('/',(req,res)=>{
    try {
        return res.status(200).json('Your server has been working fine')
    } catch (error) {
        return res.status(500).json('Internal server error')

    }
})



app.listen(port,()=>{
    try {
        console.log('your server has been listening')
    } catch (error) {
        console.log(error);
    }
})