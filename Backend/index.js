import fs from 'fs';
import http from 'http';
import slugify from 'slugify';
const response = fs.readFileSync(`./dev-data/data.json`, 'utf-8');
const productData = JSON.parse(response);

const slugs = productData.map((product) => slugify(product.productName, { lower: true }));
console.log(slugs)
const server = http.createServer((req, res) => {
    const pathName = req.url;

    console.log(`Request received: ${req.method} ${pathName}`);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        console.log('Preflight request handled with 204');
        res.end();
        return;
    }
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('Hello, this is the overview page');
    }
    else if (pathName === "/product") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('Hello, this is the product page')
    }
    else if (pathName === '/api') {
        res.writeHead(200);
        res.end(response);
        console.log('API data sent');
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end('<h1>The page you are looking for does not exist</h1>');
        console.log('404 response sent');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});