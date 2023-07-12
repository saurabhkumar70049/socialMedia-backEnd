const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    emailVerificationSentTime:{
        type:String
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    phoneOtp:{
        type:String
    },
    phoneOtpTime:{
        type:Date,
    },
    phoneVerified:{
        type:Boolean,
        default:false
    },
},
{timestamps:true} // it is basically use to know what's time user is generated
)

// const User = mongoose.model("User", userSchema);
// module.exports = User;

mongoose.model("User", userSchema);


