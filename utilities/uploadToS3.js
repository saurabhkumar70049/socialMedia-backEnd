const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

aws.config.update({
    Bucket: "instagram07",
    region:'ap-south-1'
})

const s3 = new aws.S3({apiVersion: '2006-03-01'});

var uploadParams = {Bucket: 'instagram07', Key:'img1.jpg', Body:''};
var file = './image/img1.jpg';


var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err){
    console.log("file Error", err);
})

uploadParams.Body = fileStream;
uploadParams.key = path.basename(file);


s3.upload(uploadParams, function(err, data){
    if(err){
        console.log("error", err);
    }
    if(data){
        console.log("upload Success", data.Location);
    }
})
