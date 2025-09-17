const asyncHandler = require("../utils/asyncHandler")
const userRegister = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message:"Api working successfully"
    })
})
module.exports = userRegister;