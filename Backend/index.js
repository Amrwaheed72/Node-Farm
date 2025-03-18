import fs from 'fs';
import http from 'http'
import { URL } from 'url';

const response = fs.readFileSync(`./dev-data/data.json`, 'utf-8')
const productData = JSON.parse(response)

const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/' || pathName === '/overview') {
        res.end('hello, this is the overview page')
    } else if (pathName === '/product') {
        res.end('hello, this is the product page')
    } else if (pathName === '/api') {
        res.writeHead(200, {
            "content-type": 'application/json'
        })
        res.end(response)
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello 5ra'
        })
        res.end('<h1>the page that you are looking for does not exist</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on requests on port 8000')
})