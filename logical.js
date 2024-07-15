const express=require("express")
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const logicques=require("./logicques.js");
app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
main()
.then(()=>{
    console.log("connnection");
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/question")
}


app.get("/",(req,res)=>{
    res.send("hi");
})
app.listen(8080,()=>{
    console.log("listening");
})