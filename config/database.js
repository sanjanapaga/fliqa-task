const mongoose=require('mongoose')

const configureDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Fliqa')
    .then((task)=>{
        console.log("database is connected")
    })
    .catch((err)=>{
        console.log('error connected to db')
    })
}

module.exports=configureDb