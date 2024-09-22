const http = require('http')
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello your response is here')
})

server.listen(port,()=>{
    console.log(`Server is connect to port ${port}`)
})