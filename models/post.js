const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        //validate is a fuction where check validation for any logic on database level, it can only return true or false if it will return false then then there is a message why it is not validate
        //this validation is only apply on field level
        validate:
            {validator:function(title){
                let str = title + " ";
                let word = "";
                let arr = [];
                for(let t of str){
                    if(t != " "){
                        word += t;
                    }
                    else if (t == " " && word != ""){
                        arr.push(word);
                        word = "";
                    }
                }
                return (arr.length >= 3);
            },
            message:"Title should have atleast 3 words"
        }
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
{
    timestamps:true,
    //this validation is applied on collection level
    validate:{
        validator: function(){
            return this.body || this.image_link
        },
        message:"post should have atlease body or image"
    }
}
)
