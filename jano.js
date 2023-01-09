const Discord = require("discord.js");
const jano = new Discord.Client();
//////// playing or dnd  streaming ////////
jano.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`JUST ALLAH`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    jano.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
jano.on("ready", (KENNEDY) => {
  var join = jano.channels.get(""); /// id voice
  if (join) join.join(1049044361507242035);
});
//////////////// tokn lera da bne
jano.login(""MTAxNDIyOTI1NTI4ODI3NDk0NA.GpZ1OM.8HrsH_6SBjVtfXmvT88-Gsebdb3jKkoF5qNn1g"");
