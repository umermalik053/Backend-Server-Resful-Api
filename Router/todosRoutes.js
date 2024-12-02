import express from "express"
import { todos } from "../Modules/utils/todos.js"

export const todosRoutes = express.Router()

todosRoutes.get("/todos",(req,res)=>{
    res.send({status:200 ,Message:"Success", data: todos})
})