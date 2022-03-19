import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Cors from 'cors';
import Cards from './models/dbCard.js';
//initial setup
const app = express();
const PORT = process.env.PORT || 8001;
dotenv.config();

//Middleware
app.use(express.json());
// app.use(Cors);

//DB Config
const connection_url = process.env.MONGO_URL;
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the ")
})

//saving a 
app.post('/dating/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if (err){
            res.status(501).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})
// getting
app.get('/dating/cards',(req,res)=>{
    
    Cards.find((err,data)=>{
        if (err){
            res.status(501).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

//LIstener
app.listen(PORT, () => {
    console.log(`server up and running on port${PORT}`)
})