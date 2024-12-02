import express from "express"
import { users } from "../Modules/utils/user.js"

export const userRoutes = express.Router()

userRoutes.get("/users",(req,res)=>{
    res.send({status:200 ,Message:"Success", data: users})
})