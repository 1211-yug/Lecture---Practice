const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end(`Welcome to Yug's Node.js Server

Name: Yug Patel
Course: Full Stack Developer
Age: 18
City: Surat`);
})

server.listen(port, () => {
    console.log(`Server start on ${port}`);
})