const mongoose=require("mongoose")

const quesschema=new mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    c_option:String,
});
const Question=mongoose.model("Question",quesschema);
module.exports=Question;
