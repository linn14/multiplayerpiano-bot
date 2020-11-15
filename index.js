const MPPClient = require("multiplayerpianojs");
const mpp = new MPPClient();
mpp.connect();
mpp.on("connected", () => {
  console.log("Connected.");
  mpp.setName("Sapphire | Build 1");
  mpp.setChannel("Sapphire Bot").then(() => console.log("Channel Set!"));
});

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
    const charsurl = line.split(' ');
  if (chars[0] === "play") {
    mpp.playMidi(__dirname + `/midi/${chars[1]}.mid`);
  } else {
    mpp.sendMessage(line);
  }
   if (chars[0] === "playurl") {
    mpp.playMidi(`$`);
  } else {
    mpp.sendMessage(line);
  }
}).on("close", function () {
  process.exit();
});
