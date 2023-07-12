const AWS = require('aws-sdk');


//set region 
AWS.config.update({region:'ap-south-1'});

//Create SMS attribute parameters
const sendSMS = (text, phone)=> {


    const params = {
        Message: text,
        PhoneNumber:phone,
    }

    let publishTextPromise = new AWS.SNS({apiVersion:'2010-03-31'}).
    publish(params).promise();

    publishTextPromise.then(data=> console.log(data));
    publishTextPromise.catch(err=> console.log(err));

}

module.exports = sendSMS;

