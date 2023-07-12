
const sendResponse = require('./../utilities/sendResponse')


const createPost = async(req, res)=>{
    let {title, body, image_link} = req.body;
    let user_id = req.user._id;
    if(!title){
        return sendResponse(res, 400, "Title is required");
    }
    if(!body && !image_link){
        return sendResponse(res, 400, "Either body or image is required");
    }
    const serviceData = await createPost({user_id, title, body, image_link});



}
