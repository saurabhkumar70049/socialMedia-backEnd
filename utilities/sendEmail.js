const fs = require('fs').promises;
const ejs = require('ejs');
require('dotenv').config();

const nodeMailer = require('nodemailer');
const { env } = require('process');


const sendEmail = async(options)=> {
    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_ID,
            pass: process.env.EMAIL_SECRET_KEY
        }
    })


    // let templateString = await fs.readFile('./htmlMail/mail2.ejs', 'utf-8'); // here we read html file as string 


    //this replace fuction we can use replce spacific word in our html file
    // templateString = templateString.replaceAll('{name}', options.name);
    // templateString = templateString.replaceAll('{message}', options.message);
    // templateString = templateString.replaceAll('{link}', options.link);


    // let ejsEmail = ejs.render(templateString, {...options});


    let mailOptions ={
        from:process.env.EMAIL_ID,
        to: options.email,

        // here i write a html email in html file and then import it here
        // html: templateString  

        // html:ejsEmail


        ////this how we send html email 
        // html: `
        //     <h1>hello saurabh</h1>
        //     <p>How are you </p>
        //     <p>this is the link of google <a href="google.com">link</a>
        
        // `

        ////this is the way to send a normal email 
        subject:options.subject, 
        text:options.text,
        // attachments:[  //this is how can send file to mail
        //     {
        //         filename:"img1.jpg",
        //         path:"./image/img1.jpg"
        //     }
        // ]
    }


    try{
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = sendEmail;