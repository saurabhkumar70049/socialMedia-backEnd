
const sendResponse = (res, status = 200, success=true, message= "", data= {})=>{
    return(
        res.status(status).json({
            success,
            message,
            data
        })
    )
}

module.exports = sendResponse;