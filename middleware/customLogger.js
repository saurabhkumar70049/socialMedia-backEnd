const color = require("colors");


const customLogger = (req, res, next)=> {
    console.log("Custom logger is running ");
    console.log(`${req.method} ${req.protocol}://${req.get("host")}/${req.originalUrl} API is hit at : ${new Date().toISOString()}`.underline.red);

    next();

}

module.exports = customLogger;


//new Date().toISOSting -> it tell about date in sorter format
//new Date().toString -> it also tell about date in longer manner