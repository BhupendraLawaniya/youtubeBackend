const express = require("express");
const userRegister = require("../controllers/user.controller");
const router = express.Router();
const upload = require("../middlewares/multer.middleware");

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    userRegister);

module.exports = router;