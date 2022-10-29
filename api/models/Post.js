const mongoose = require('mongoose');
const {Schema} = mongoose

const PostSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    
    photo:{
        type:String,
        required:false
    },
    bloodUnit:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:false
    },
    purpose:{
        type:String,
        required:true
    },
    patientAge:{
        type:String,
        required:false
    },
    mobileNumber:{
        type:String,
        required:true
    },hospitalName:{
        type:String,
        required:true
    },bloodGroup:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    username: {
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }
  },
    {timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema);