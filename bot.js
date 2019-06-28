const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594270400876118057")
setInterval(function() {
channel.send(`CreditGenratorFree.`);
}, 30)
})

client.login(process.env.BOT_TOKEN);