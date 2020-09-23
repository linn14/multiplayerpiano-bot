const MPPClient = require("multiplayerpianojs");
const mpp = new MPPClient();
//const mpp = new MPPClient(SCOCKS/HTTPS PROXY HERE) alternatively
mpp.connect();
mpp.on("connected", () => {
  console.log("bot connected");
  mpp.setName("pianoman");
  mpp.setChannel("channel").then(() => console.log("Channel Set!"));
});

// These are chat messages
mpp.on("message", (msg) => {
  console.log(`${msg.user.name}: ${msg.content}`);
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    const chars = line.split(' ');
  if (chars[0] === "p") {
    mpp.playMidi(__dirname + `/midi/${chars[1]}.mid`);
  } else {
    mpp.sendMessage(line);
  }
}).on("close", function () {
  process.exit();
});