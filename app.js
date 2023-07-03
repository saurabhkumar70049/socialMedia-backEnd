// saurabhbarej, Password07
//mongodb+srv://saurabhbarej:<password>@cluster0.ncpdb62.mongodb.net/



const express = require('express');
const { default: mongoose } = require('mongoose');

require('dotenv').config();

require('./models/user');
require('./models/post');


const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then((result)=>{
        console.log(`Server is connected to database`)
    })
    .catch(err=> {
        console.log(`Server is not connected to database`)
    })

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})