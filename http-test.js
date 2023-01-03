const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write("hello world");
        res.end()
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([
            {
                id:1,
                name:"Learn Node with Mosh"
            },
            {
                id:2,
                name:"Learn Node with Mosh"
            }
        ]))
        res.end()
    }
})

server.listen(3000,() => {
    console.log('http://localhost:3000')
})