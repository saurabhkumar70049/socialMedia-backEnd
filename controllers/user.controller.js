
const express = require('express');
const mongoose= require("mongoose");

// const User = require('../models/user.model')
const User = mongoose.model("User");

const singup = async (req, res)=> {
    const {name, email, password, confirmPassword}= req.body;
    if(!name || !email || !password || !confirmPassword){
        return sendResponse(res, 404, false, "Fill all field", {});
    }
    User.findOne({email})
     .then((userFound)=>{
        if(userFound){
            return sendResponse(res, 201, false, "User Already exist", userFound);
        }

        newUser = new User({
            name,
            email,
            password
        })
        newUser.save()
         .then((userSave)=> {
            return sendResponse(res, 200, true, "User register successfully ", userSave);
         })
         .catch(err=> {
            return sendResponse(res, 404, false, "there is some error", err);
         })
     })
     .catch(err=>{
        return sendResponse(res, 400, false, "Error Occure ", err);
     })
}

module.exports = singup;