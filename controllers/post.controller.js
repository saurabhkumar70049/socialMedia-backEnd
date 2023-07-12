
const sendResponse = require('./../utilities/sendResponse')
const createPostService = require('./../services/post.service.js');


const createPostController = async(req, res)=>{
    let {title, body, imageLink,userId} = req.body;
    if(!title){
        return sendResponse(res, 400, "Title is required");
    }
    if(!body && !imageLink){
        return sendResponse(res, 400, "Either body or image is required");
    }
    const serviceData = await createPostService({userId, title, body, imageLink});

    if(serviceData.success){
        return sendResponse(res, 200, true, serviceData.message, serviceData.data);
    }
    else {
        return sendResponse(res, 400, false, serviceData.error);
    }



}

module.exports = createPostController;