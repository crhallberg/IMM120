var app = require('http').createServer(serverHandler);
var io = require('socket.io')(app);
var middleware = require('socketio-wildcard')();
io.use(middleware);
app.listen(3120);

// socket.io
io.on('connection', function (socket) {
    socket.join("imm120");
    socket.emit("hello", {}); // establish connection
    socket.on('*', function (packet) {
        var event = packet.data[0];
        var data = packet.data[1];
        console.log(event, data);

        if (event === "join") {
            if (typeof data === "string") {
                for (var r in socket.rooms) {
                    socket.leave(r);
                }
                socket.join(data);
                setTimeout(
                    () => console.log("JOINED", Object.keys(socket.rooms)[0]),
                    100
                );
            }
        } else {
            io.to(Object.keys(socket.rooms)[0]).emit(event, data);
        }
    });
});


function serverHandler(req, res){
    // your normal server code
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sockets are live.');
}
console.log("Running on 3120");
