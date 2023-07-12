const { default: mongoose } = require("mongoose")

const POST = mongoose.model("POST");



const createPost = async(newPost)=>{
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