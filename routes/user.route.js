const express = require("express");


const userRouter = express.Router();

const singupController = require('../controllers/user.controller');


userRouter.post('/signup', singupController);

module.exports = userRouter;