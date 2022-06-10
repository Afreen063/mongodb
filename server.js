//import statement
const express= require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")



//configuration
dotenv.config()
const port=process.env.PORT || 8000;
mongoose.connect(process.env.DATABASE_URL,
    {
    useNewUrlParser:true,

}).then(()=>{console.log("db connected successfully");})
.catch(err=>{console.log(err);})

//app or serverstart
const app= express();



//middleware


//routes
app.get('/',(req,res)=>{
    res.send("created server");
})

//listen

app.listen(port,()=>{
    console.log(`server has started at port ${port}`);
});