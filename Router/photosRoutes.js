import express from "express"
import { photos } from "../Modules/utils/photos.js"


export const photosRoutes = express.Router()

photosRoutes.get("/photos",(req,res)=>{
    res.send({status:200 ,Message:"Success", data:photos})
})