import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        watchHistory:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        },
        userName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        fullName:{
            type:String,
            required:true
        },
        avatar:{
            type:String,
            required:true
        },
        coverImage:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:[true, "Password is required"]
        },
        refreshToken:{
            type:String,
            required:true
        }
    },{timestamps:true}
)

export const User = mongoose.model('User', userSchema);