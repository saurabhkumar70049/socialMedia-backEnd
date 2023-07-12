const express = require('express');

const postRoute = express.Router();

const createPostController = require('./../controllers/post.controller.js');


postRoute.post('/create', createPostController);

module.exports = postRoute; 