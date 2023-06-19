const {Schema,SchemaTypes,model}=require("mongoose")
const studentSchema=new Schema({
    studentname:SchemaTypes.String,
    studentid:SchemaTypes.Number,
    section:SchemaTypes.String,
    bloodgroup:SchemaTypes.String
})
const student=model("student",studentSchema)
module.exports=student