const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const sendResponse = require('./../utilities/sendResponse');


const authMiddleware = async(req, res,next)=> {
    try {
        let token = req.headers.authorization;
        if(!token){
            return sendResponse(res, 401, "Please login to access this resource");
        }
        // token = token.split(" ")[1];
        let user = await User.findOne({token:token})
    }
    catch(err){

    }
}