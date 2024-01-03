const User=require('../models/user')

const userController={}

userController.create=(req,res)=>{
    const body=req.body
    console.log(body)
    const user=new User(body)
    user.save()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err.meassage)
    })
}

module.exports=userController