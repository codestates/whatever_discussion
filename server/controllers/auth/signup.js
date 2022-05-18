
const { users } = require('../../models');
module.exports={
    post:async (req,res)=>{
        try{
            const{userId,password,username,nickname,mbti}=req.body;
            if(!userId||!password||!username||!nickname||!mbti){
                return res.status(400).json({message: "Insufficient data were provided to server. Put in all the data."})
            } 
            // console.log(userId,password,username,nickname,mbti)
            const newuser = await users.create({
                userId,
                password,
                username,
                nickname,
                mbti
              })
            //   console.log('@@@@@@@@@@@',newuser)
            
              res.status(201).json({message: "You are successfully registered in this service."})

        }catch(err){
            console.log(err)
            return  res.status(500).json({message:"Server is out of order."})
        }
        



    }
}