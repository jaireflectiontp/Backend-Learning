import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEYS,
    api_secret: process.env.API_SECRET
});


const uploadOnCloudinary = async (loacalpath) => {
    try {
        if (!loacalpath) return null
        const response = await cloudinary.uploader.upload(loacalpath, {
            resource_type: "auto"
        })
        console.log("file uploaded on cloudinary", response.url);
        return response
    } catch (error) {
        fs.unlink(loacalpath)
        return null
    }
}