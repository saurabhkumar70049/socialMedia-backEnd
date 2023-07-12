const { default: mongoose } = require("mongoose")



const singup = require("../controllers/user.controller");

const User = mongoose.model("User");

const signupServer = async (userDetail)=> {
    const userFound = await User.findOneAndDelete({email: userDetail.email})
    if(userFound){
        return {
            success:true,
            message:"User already Exist",
            data:userFound
        }
    }
    try {
        userDetail = new User({
            ...userDetail
        })
        const newUser = await userDetail.save();
        if(newUser){
            return {
                success:true,
                message:"User Created",
                data:newUser
            }
        }
    }
    catch(err){
        return {
            success:false,
            message: "user is not created",
            error:err.message
        }
    }
}

const findById = async(_id)=>{
    try {
        const userDetail = User.findById({_id});
        if(userDetail){
            return {
                success:true,
                message:"User found",
                data:userDetail
            }
        }
        else {
            return {
                success:false,
                error:"User not found",
                
            }
        }
    }
    catch(err){
        return {
            success:false,
            error:err.message
        }
    }
}

module.exports = signupServer;