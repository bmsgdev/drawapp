// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.listen(3000, () => console.log('hiiiiii port 3000.'));

// import express from "express";
// import { createServer } from "http";
// import { Server } from "socket.io";

// const app = express();
// const httpServer = createServer(app);
// const options = { /* ... */ };
// const io = new Server(httpServer, options);

// io.on("connection", socket => { /* ... */ });

// httpServer.listen(3000);

import { createServer } from "http";
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(2710);