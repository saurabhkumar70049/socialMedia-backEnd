const express = require("express");
const sendResponse = require("../utilities/sendResponse");
const { default: mongoose } = require("mongoose");
const userRouter = express.Router();

const User = require("../models/user");



userRouter.post('/signup', (req, res)=> {
    const {name, email, password, phone}= req.body;
    if(!name || !email || !password || !phone){
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
            password,
            phone
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
        return sendResponse(res, 404, false, "Error Occure ", err);
     })

})

module.exports = userRouter;