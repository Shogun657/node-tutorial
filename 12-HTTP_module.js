
const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('Welcome to my homepage');
//     res.end();
// })


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our homepage");
    } else if (req.url === '/about') {
        res.end('This is about us');
    } else {
        res.end(`
        <h1> Error 404 </h1>
        <p>Can't seem to find the page you are looking for...</p>
        <a href="/">Back To Home Page</a>
        `);
    }
});

server.listen(5000);
