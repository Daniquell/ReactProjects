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
const bodyParser=require('body-parser')
const app=express()
const dotenv=require("dotenv");
dotenv.config();
const PORT=process.env.PORT
let users=[{name:"andrusha",id:1},{name:'jehrfguih',id:2},{name:"uerhfgfeuiy",id:3}]
app.use( (req, res, next)=> {
    bodyParser.json()
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log(req.body)
    res.send(users)
})
app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
})


