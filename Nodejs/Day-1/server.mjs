import { log } from 'console';
import http from 'http'

const port = 3001

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.end(`Welcome to Yug's Node.js Server

Name: Yug Patel
Course: Full Stack Developer
Age: 18
City: Surat`);
})

server.listen(port , hostname , () => {
    console.log(`Server Start on http://${hostname}:${port}`);
})

