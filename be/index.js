const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");

require("dotenv").config();

const userRoutes = require("./routes/index.routes.js");
const PORT = process.env.PORT || 4000;

const app = express();

const server = http.createServer(app);

const io = socketIo(server, {
  transports: ["polling"],
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("message", (message) => {
    console.log(`message from ${socket.id} : ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`socket ${socket.id} disconnected`);
  });
});

app.use(express.json());
app.use(userRoutes);
app.use(cors());

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
