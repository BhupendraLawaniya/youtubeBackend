const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = (localFilePath) => {
  try {
    if (!localFilePath) return null
    const response = cloudinary.v2.uploader
      .upload(localFilePath, {
        resource_type: "auto",
        public_id: "Just_Learn",
        overwrite: true
      })
      .then(result => console.log(result));
      console.log("File is uploaded on Cloudinary",response.url)
      return response;

  }
  catch (error) {
    fs.unlinkSync(localFilePath) //remove the locally saved file when upload operation is failed on cloudinary
    return null;
  }
}
module.exports = uploadOnCloudinary;

