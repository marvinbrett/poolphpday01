const express = require("express");
const socket = require("socket.io")
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

const server = app.listen("3000", () => {
    console.log("Server Running on Port 3000...");
});

io = socket(server)

io.on("connection", (socket) => {
    console.log(socket.id);
    
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("User Joined Room: " + data);
    });

    socket.on("disconnect", () => {
        console.log("USER DISCONNECTED");
    })
})