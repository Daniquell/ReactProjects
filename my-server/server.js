// const http=require("http");
// const dateNow = require("./lessons/Time");
// const name = require("./lessons/events");
// const dotenv=require("dotenv");
// const { resolve } = require("path");
// dotenv.config();
// const PORT=process.env.PORT


// http.createServer((req,res)=>{//request-мы посылаем(запрос), а response- то что приходит(ответ)

//     res.writeHead(200,{
//         'Content-Type':'application/json'
//     })
//     res.end(JSON.stringify({id:1, name:'Andrusha'}))
    
// }).listen(PORT, process.env.HOST,()=>{
//     console.log(`Сервер начал прослушивание на порту ${PORT}`);
// });         


//console.log(global.date)


const express=require('express')
const app=express()
const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT

app.get('/users',(req,res)=>{
    res.send({name:"andrusha",id:1})
})
app.get('/posts',(req,res)=>{
    res.send('POSTS')
})
app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
})


