const express=require("express")
const app=express();
const mongoose=require("mongoose");
const path=require("path");
// const signindata=require("./signindata.js");
app.use(express.urlencoded({extended:true}));
main()
.then(()=>{
    console.log("connnection");
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/question")
}
const quesschema=new mongoose.Schema({
    Email:String,
    Password:String,
    Confirmpassword:String,
   });
   
   const users=mongoose.model("signindata",quesschema);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'signinpage.html'));
    app.use(express.static(__dirname));
    
})
// app.post("/pet",async(req,res)=>{
//     // const {Email,Password,Confirmpassword} =req.body;
//     // const user=new users({
//     //     Email,
//     //     Password,
//     //     Confirmpassword,
//     // });
//     // await user.save()
//     // console.log(req.body.Password);
//     res.send("secc");
// })
// app.post("/pet",async(req,res)=>{
//     res.send("hi");
// })
app.listen(8080,()=>{
    console.log("listening");
})