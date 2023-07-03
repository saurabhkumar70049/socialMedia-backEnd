const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:false,
    },
    image_link:{
        type:String,
        require:false,
    },
    user_id:{
        type:ObjectId,
        ref:"User",
        require:true,
    }
},
{timestamps:true}
)