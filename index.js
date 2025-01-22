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
    

    
 })

app.listen(6900,"localhost",()=>{
    console.log("App is running on http://localhost:6900");
    
})