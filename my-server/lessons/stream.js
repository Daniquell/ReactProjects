 const fs = require('fs')
 const path = require('path')

// // fs.readFile(path.resolve(__dirname,'test.txt'),(err,data)=>{
// //     if(err){
// //         throw err;
// //     }
// //     console.log(data)
// // })

// const stream=fs.createReadStream(path.resolve(__dirname,'test.txt'))

// stream.on('data',(chunk)=>{
//     console.log(chunk)

// })

// stream.on('and',()=>console.log('закончили читать'))
// stream.on('open',()=>console.log('начали читать'))
// stream.on('error',(err)=>console.log(err))

const writableStream=fs.createWriteStream(path.resolve(__dirname,'text2.txt'))
for(let i=0;i<20;i++){
    writableStream.write(i+'\n');
}
writableStream.on('error',(err)=>console.log(err))

const http=require('http');

http.createServer((req,res)=>{
    const stream=fs.createReadStream(path.resolve(__dirname,'test.txt'))
    stream.pipe(res)
})