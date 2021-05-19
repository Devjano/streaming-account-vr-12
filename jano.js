
const Discord = require("discord.js");
const jano = new Discord.Client();
//////// playing or dnd  streaming ////////
jano.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `I rely on God that's why no one can destroy him`,
  `BA XOM UP`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//////////////// tokn lera da bne 
jano.login("");
