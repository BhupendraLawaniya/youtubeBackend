const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader
      .upload(localFilePath, {
        resource_type: "auto",
        overwrite: true,
      })

      //.then((result) => console.log(result)); ===>> //this line is incorrect becz i already wrote await which return promise so not need to add .then becz it also wait for response
      
      console.log("File is uploaded on Cloudinary", response.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved file when upload operation is failed on cloudinary
    return null;
  }
};
module.exports = uploadOnCloudinary;
