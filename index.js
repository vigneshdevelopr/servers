import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();

const port = process.env.port
const app = express();

app.use(cors());
app.use(express.json())


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