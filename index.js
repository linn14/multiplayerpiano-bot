const MPPClient = require("multiplayerpianojs");
const mpp = new MPPClient()
const config = require("./config.json");
console.log("linn14/multiplayerpiano-bot");
console.log("forked from dawoori/multiplayerpiano-bot");
mpp.connect();
mpp.on("connected", () => {
  console.log("Connected.");
  mpp.setName(config.name);
  mpp.setChannel(config.channel).then(() => console.log("Channel Set!"));
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
  if (chars[0] === "play") {
    mpp.playMidi(__dirname + `/midi/${chars[1]}.mid`);
  } else {
    mpp.sendMessage(line);
  }
}).on("close", function () {
  process.exit();
});

# Smh im a bitch, im gonna work on this later.
