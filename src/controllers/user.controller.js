const asyncHandler = require("../utils/asyncHandler")
const userRegister = asyncHandler(async(req, res)=>{
    //get user data from frontend
    //validation check - for empty
    //check if user already exists
    //check for image ,avatar
    //upload them on cloudinary
    //create user object to save in mongodb
    //remove password and refresh token field from response
    //check for user response
    //return res 


    const {username,email,fullname,password} = req.body;
    console.log("email:-",email)
})
module.exports = userRegister;