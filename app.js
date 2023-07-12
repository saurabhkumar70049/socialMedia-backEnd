// saurabhbarej, Password07
//mongodb+srv://saurabhbarej:<password>@cluster0.ncpdb62.mongodb.net/



const express = require('express');
const cors = require("cors")
const { default: mongoose } = require('mongoose');
const customLogger = require('./middleware/customLogger');
const morgan = require('morgan');
const colors = require('colors');


require('dotenv').config();

require('./models/user.model.js');
require('./models/post.model.js');


const userRouter = require('./routes/user.route.js');


const app = express();
const PORT = 5000;

//Database

mongoose.connect(process.env.DATABASE_URL)
    .then((result)=>{
        console.log(`Server is connected to database`)
    })
    .catch(err=> {
        console.log(`Server is not connected to database`)
    })



//This is how we use morgan 
morgan.token('info', function(req, res){
    return req.headers['authorization']
})
morgan.format('apiDetail', ':method :url :status :info'.underline.red) 



//middleWare 

app.use(express.json());
app.use(cors());
//it is middleWare and it actually called logger. it basically proccess the req request on our application 
app.use(customLogger)
// morgen is use just as customLogger but only diffent is customLogger is selfDevloped and morgan is provided by NPM Packege 
//Morgan is another HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application
app.use(morgan('apiDetail')) 

app.use('/user', userRouter);





app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})



//login is something which just track which api hit how many time like help us in loadbalancer
/*


*/