const { createServer } = require('http');
const { Server } = require('socket.io')

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", async (socket) => {
    console.log(socket.id);

    socket.on("novo-pedido", (pedido) => {
        console.log(pedido);

        socket.broadcast.emit("novo-pedido-recebido", pedido)
    })
})


httpServer.listen(5000, () => {
    console.log("Server is listening to the port 5000");
})