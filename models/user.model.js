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
    email_verification_sent_time:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    phone_otp:{
        type:String
    },
    phone_otp_time:{
        type:Date,
    },
    phone_verified:{
        type:Boolean,
        default:false
    }
},
{timestamps:true} // it is basically use to know what's time user is generated
)

// const User = mongoose.model("User", userSchema);
// module.exports = User;

mongoose.model("User", userSchema);


