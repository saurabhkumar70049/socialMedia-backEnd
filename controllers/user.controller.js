
const express = require('express');
const mongoose= require("mongoose");


// const User = require('../models/user.model')
const User = mongoose.model("User");

const sendResponse = require('./../utilities/sendResponse.js');
const sendMail = require('./../utilities/sendEmail.js');
const sendSMS = require('./../utilities/sendSMS.js');


const signupServer = require('./../services/user.service.js');


function generateOtp(){
    return Math.floor(Math.random()*99999 + 100000);
}


const singupController = async (req, res)=> {
    const {name, email, password, confirmPassword, phone}= req.body;
    if(!name || !email || !password || !confirmPassword || !phone){
        return sendResponse(res, 404, false, "Fill all field", {});
    }

    if(confirmPassword !== password){
        return sendResponse(res, 404, false, "Confirm Password is not matching", {});
    }
    const newUser = {
        name, 
        email,
        phone,
        password,
    }
    newUser.phoneOtp = generateOtp();

    const serviceData = await signupServer(newUser);

    if(serviceData.success){
        sendMail({
            email:"hungrysunny6@gmail.com",
            subject: "Registration Done",
            text: `Hey ${name} \n thank you for registration`
        })
        sendSMS(`Your OTP is ${newUser.otp} \n thank you`, "+917004951720");
        sendResponse(res, 200, true, serviceData.message, serviceData.data);
    }
    else {
        sendResponse(res, 404, false, serviceData.message, serviceData.error);
    }
    
    
}


const verifyOtp = async(req, res, next)=>{
    let {otp, userId} = req.body;
    if(!otp || !userId){
        return sendResponse(res, 404, false, "Plese fill all the field", {});
    }
    
    

}
module.exports = singupController;