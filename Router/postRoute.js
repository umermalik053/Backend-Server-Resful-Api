import express from "express"
import { posts } from "../Modules/utils/post.js"

export const postRoutes = express.Router()

postRoutes.get("/posts",(req,res)=>{
    res.send({status:200 ,Message:"Success", data:posts})
})
