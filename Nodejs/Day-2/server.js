const http = require('http')
const fs = require('fs')
const port = 4000

const request = (req, res) => {
    let filename = ""

    switch (req.url) {
        case '/': filename = "./login.html"
            break
        case '/rgister': filename = "./page/register.html"
            break
    }

    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result)
        }
    })

}

const server = http.createServer(request)

server.listen(port, (err) => {
    if (!err) {
        console.log(`http://localhost:${port}`);
        return false
    }

    console.log('nodejs server not running.');

})
