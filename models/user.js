const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:8,
        maxlength:20,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    }
})

const User=mongoose.model('User',userSchema)
module.exports=User