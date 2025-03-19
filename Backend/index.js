import fs from 'fs';
import http from 'http';
import slugify from 'slugify';
const response = fs.readFileSync(`./dev-data/data.json`, 'utf-8');
const productData = JSON.parse(response);

const slugs = productData.map((product) => slugify(product.productName, { lower: true }));
console.log(slugs)
const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Log the incoming request for debugging
    console.log(`Request received: ${req.method} ${pathName}`);

    // Set CORS headers for every response
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
    res.setHeader("Content-Type", "application/json"); // Ensure content type is set

    if (req.method === "OPTIONS") {
        // Handle preflight request
        res.writeHead(204); // No content
        console.log('Preflight request handled with 204');
        res.end();
        return;
    }

    // Overview Page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('Hello, this is the overview page');
    }
    // Product Page
    else if (pathName === "/product") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('Hello, this is the product page')
    }
    // API Route
    else if (pathName === '/api') {
        res.writeHead(200); // Ensure status and headers are set before writing data
        res.end(response); // Send the JSON data
        console.log('API data sent');
    }
    // 404 Not Found
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end('<h1>The page you are looking for does not exist</h1>');
        console.log('404 response sent');
    }
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});