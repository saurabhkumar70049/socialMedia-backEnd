const { default: mongoose } = require("mongoose")

const POST = mongoose.model("POST");



const createPostService = async(_id, userId, newPost)=>{
    try{
        const postDetaile = await POST.create(newPost);
        if(postDetaile){
            return {
                success:true,
                message:"New post Added",
                data:postDetaile
            }
        }
    }
    catch(err){
        return {
            success:false,
            error:err.message
        } 
    }
}

const updatePostService = async(updatePost)=>{
    try{
        const foundPost = await POST.findOne({_id, userId});
        if(foundPost){
            const updateData = await POST.findByIdAndUpdate({_id:foundPost._id}, {
                ...newPost
            });
            if(updateData){
                return {
                    success:true,
                    message:"Post updated",
                    data:updateData
                }
            }
        }
        else {
            return {
                
            }
        }
    }
}


module.exports = createPostService;