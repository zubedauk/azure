const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("my first baby step")
    }
    else if(req.url=="/about"){
        res.end("about")
    }
    else if(req.url=="/api"){
        fs.readFile(`${__dirname}/userAPI/api.json`,"utf-8",(err,data)=>{
            let dta=JSON.parse(data)
            console.log(dta.name)
            res.end(dta.name)
        })
    }
    else{
        res.writeHead(404)
    }
})
server.listen(3001,"localhost",()=>{
    console.log("server is runing on port 3001")
})