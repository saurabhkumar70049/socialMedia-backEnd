const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


AWS.config.update({
    region:'ap-south-1',
})

const s3 = new AWS.S3();

let upload = multer({
    storage: multerS3({
        s3:s3,
        bucket: "instagram07",
        act:'pulic-read',
        metadata:function(req, file, cb){
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb){ // it use to make our url unique so, pass any thing which make it unique
            cb(null, Date.now().toString())
        }
    })
})















//this code is using for simply upload the file to S3 Bucket
// const aws = require('aws-sdk');
// const fs = require('fs');
// const path = require('path');

// require('dotenv').config();

// aws.config.update({
//     Bucket: "instagram07",
//     region:'ap-south-1'
// })

// const s3 = new aws.S3({apiVersion: '2006-03-01'});

// var uploadParams = {Bucket: 'instagram07', Key:'img1.jpg', Body:''};
// var file = './image/img1.jpg';


// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function(err){
//     console.log("file Error", err);
// })

// uploadParams.Body = fileStream;
// uploadParams.key = path.basename(file);


// s3.upload(uploadParams, function(err, data){
//     if(err){
//         console.log("error", err);
//     }
//     if(data){
//         console.log("upload Success", data.Location);
//     }
// })
