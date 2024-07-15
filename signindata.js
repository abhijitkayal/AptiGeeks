const mongoose=require("mongoose")

const quesschema=new mongoose.Schema({
 Email:String,
 Password:String,
 Confirmpassword:String,
});

const signindata=mongoose.model("signindata",quesschema);
module.exports=signindata;