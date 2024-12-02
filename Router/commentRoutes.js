import express from "express"
import { Comment } from "../Modules/utils/comment.js"


export const CommentRoutes = express.Router()

CommentRoutes.get("/comments",(req,res)=>{
    res.send({status:200 ,Message:"Success", data:Comment})
})