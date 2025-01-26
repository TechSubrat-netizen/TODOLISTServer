import express from 'express';
import fs from 'fs'

const app=express()
app.use(express.json())
 app.get('/',(req,res)=>{
    res.sendFile('C:/Users/subra/Desktop/Jspider/ExpressJS/ToDoServer/Public/index.html');
 })
 app.post('/todo/add',(req,res)=>{
    const task=req.body;
    const todo=JSON.parse(fs.readFileSync('./Public/todo.json',task,'utf-8'));
    todo.push(task)
    fs.writeFileSync('./Public/todo.json',JSON.stringify(todo))
   res.send(todo)
 })
 app.get("/todo/get", (req, res) => {
   const todos = JSON.parse(fs.readFileSync("./Public/todo.json", "utf-8"));
   res.status(200).send(todos)
})


app.listen(4000,"localhost",()=>{
    console.log("App is running on http://localhost:4000");
    
})