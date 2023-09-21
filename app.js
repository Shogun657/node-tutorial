// const server = http.createServer((req,res)=>{
//     res.write('Welcome to my homepage');
//     res.end();
// })


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("Welcome to our homepage");
//     } else if (req.url === '/about') {
//         res.end('This is about us');
//     } else {
//         res.end(`
//         <h1> Error 404 </h1>
//         <p>Can't seem to find the page you are looking for...</p>
//         <a href="/">Back To Home Page</a>
//         `);
//     }
// });

const http = require('http');

// Create an HTTP server
const server = http.createServer();

// Register an event listener for the 'request' event
server.on('request', (req, res) => {
  // Emit a custom 'welcome' event
  server.emit('welcome', req, res);
});

// Register an event listener for the custom 'welcome' event
server.on('welcome', (req, res) => {
  res.end('Welcome to the server!');
});

// Start the server and listen on port 5000
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});

