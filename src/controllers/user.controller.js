const asyncHandler = require("../utils/asyncHandler")
const apiError = require("../utils/apiError");
const User = require("../modles/user.model");
const uploadOnCloudinary = require("../utils/cloudinary.js");
const apiResponse = require("../utils/apiResponse");
const userRegister = asyncHandler( async(req, res)=>{
    //get user data from frontend
    //validation check - for empty
    //check if user already exists
    //check for image ,avatar
    //upload them on cloudinary
    //create user object to save in mongodb
    //remove password and refresh token field from response
    //check for user response
    //return res 


    const {userName,email,fullName,password} = req.body;

    if([fullName, email, userName, password].some((field)=> field?.trim() === ""))
    {
        throw new apiError(400,"All fields are required");
    }
    //check user is exist already or not

    const existedUser = await User.findOne({
        $or:[{ userName },{ email }]
    })


    if(existedUser){
        throw new apiError(409,"User with email or user name already exist")
    }

    //check for image and avatar

    const avatarLocalPath = req.files?.avatar[0]?.path;


    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new apiError(400,"Avatar file is required");
    }
     if(!coverImageLocalPath){
        throw new apiError(400,"CoverImage file is required");
    }
    // upload on cloudinary

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

     if(!avatar){
        throw new apiError(400,"Avatar file is not uploaded on cloudinary");
    }

    //create user in database
    const user = await User.create({
        userName: userName.toLowerCase(),
        email,
        password,
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    })

    //check user is created
    const createdUser = await User.findById(user._id).select("-password -refreshToken"); //check user is created or remove password and refresh token from response that's why create this variable
    if(!createdUser){
        throw new apiError(500,"user is not registered!!! check")
    }

    //return res
    return res.status(201).json(new apiResponse(200, createdUser, "user Registered successfully"))



})
module.exports = userRegister;