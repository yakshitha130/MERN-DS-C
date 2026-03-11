const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const app = express();
dotenv.config();
connectDB();
app.get('/',(req,res)=>{
    res.send("Get Route is working");

})
app.post('/',(req,res)=>{
    res.send("post Route is working");
})
app.put('/',(req,res)=>{
    res.out("put Route is Working");

})
app.delete('/',(req,res)=>{
    res.out("Delete Route is Working");
})
const PORT = process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`server is Runinng on http://localhost:${PORT}`)
});