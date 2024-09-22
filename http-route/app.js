const http = require('http');
const url = require('url')
const port = 3000

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true)
    const path = parsedUrl.pathname
    const method = req.method.toLowerCase()

    res.setHeader('Content-type','application/json')

    if(path==='/api/getData' && method=='get'){
       res.writeHead(200)
       res.end(JSON.stringify({message:"This is get request"}))
    }else if(path==='/api/postData' && method=='post'){
        let body = ''
        req.on('data',buffer=>{
            body +=buffer.toString();
        })
        
        req.on('end',()=>{
            const parseBody = JSON.parse(body)
            console.log(parseBody," its my parse bodyyyyyyyyy")
            res.writeHead(200)
            res.end(JSON.stringify({message:"this is post request",data:parseBody}))
        })
       
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:"Data is not found"}))
    }
})

server.listen(port,()=>{
    console.log('Connect on server localhost:'+port)
})