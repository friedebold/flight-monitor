// Create Server
const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

// Handshake
io.on("connection", (socket) => {
  console.log("user connected");
});

// Read Serial
const { SerialPort, ReadlineParser } = require("serialport");

const serialPort = new SerialPort({
  path: "/dev/cu.usbserial-10",
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
  flowControl: false,
});

const parser = new ReadlineParser("\n\r");
serialPort.pipe(parser);

parser.on("data", function (data) {
  console.log(data);
  io.emit("data", { data: data });
});

http.listen(8080, () => {
  console.log("listening on *:8080");
});
