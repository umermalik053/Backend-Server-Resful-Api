import express from "express"
import { album } from "../Modules/utils/albums.js"


export const albumRoutes = express.Router()

albumRoutes.get("/albums",(req,res)=>{
    res.send({status:200 ,Message:"Success", data:album})
})
