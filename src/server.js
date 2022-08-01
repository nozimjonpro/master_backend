const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const http = require("http");
const modules = require("./modules/index.js");
const {fetchAll} = require('./lib/postgres.js')
const app = express();
app.use(express.json());
app.use(cors());
app.use(modules);
const server = http.createServer(app);


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection",  (socket) => {
  socket.on("new post", async(data) => {
   
      
  });

});

server.listen(process.env.PORT || 5000, () =>
  console.log(`server ready http://localhost:5000`)
);
