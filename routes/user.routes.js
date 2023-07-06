const express = require("express");
const sendResponse = require("../utilities/sendResponse");
const { default: mongoose } = require("mongoose");
const userRouter = express.Router();

const signup = require('../controllers/user.controller');


userRouter.post('/signup', signup);

module.exports = userRouter;