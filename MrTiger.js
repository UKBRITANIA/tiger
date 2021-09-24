const Discord = require('discord.js');
const tpoints = {};
const prefix = "2"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `Joker Staff`,
    `MrTiGER`,
    `100k Member soon`,
    `MrTiger `,
    `Ilove ❤ `,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("ODkwOTU4MDI2NTM2ODA4NDQ5.YU3XUg.V0BFPrK_iljySS7wfeIPjYwD3Yk");
