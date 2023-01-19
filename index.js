require('module-alias/register')
require('dotenv').config()
const fs = require("fs");
const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({
    intents, 
    disableEveryone: true, partials : ["MESSAGE", "CHANNEL", "REACTION"]
})
const config = require('@root/config')
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = config.prefix
client.categories = fs.readdirSync("./commands/");
const loadFeatures = require("@features/load-features");

["command", "event"].forEach(handler => {
    require(`@handlers/${handler}`)(client);
})

loadFeatures(client)

let interval;
client.on('message', async msg => {
    switch (msg.content) {
     //other commands above here...
     case "!eye":
        msg.channel.send("You are now subscribed to eye reminders.");
         interval = setInterval (function () {
          msg.channel.send("Please take an eye break now!")
          .catch(console.error); 
        }, 1000); //every hour
        break;
        case "!stop":
            msg.channel.send("I have stopped eye reminders.");
            clearInterval(interval);
            break;
    }
  })
// client.login(process.env.DLUNAR)                                             //nek gawe heroku
client.login(process.env.token);    //nek gawe vscode langsung