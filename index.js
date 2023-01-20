require('module-alias/register')
require('dotenv').config()
const fs = require("fs");
const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({
    intents, 
    disableEveryone: true, partials : ["MESSAGE", "CHANNEL", "REACTION"]
})
const axios = require("axios");
const config = require('@root/config')
const array = require('./array')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.prefix = config.prefix
client.categories = fs.readdirSync("./commands/");
const loadFeatures = require("@features/load-features");

["command", "event"].forEach(handler => {
    require(`@handlers/${handler}`)(client);
})

loadFeatures(client)
  const itemlist = array.map((e) => {
    return e.nama;
  });
  
client.on('message', async msg => {
    switch (msg.content) {

      case "!start":
      msg.channel.send("You are now subscribed to eye reminders.");
      (async ()=> {
        for(let i = 0; i < itemlist.length; i++){
          console.log(i)
          const carleon = await axios.get(
            `https://www.albion-online-data.com/api/v2/stats/prices/${itemlist}?locations=caerleon`
          );
        
          const blackmarket = await axios.get(
            `https://www.albion-online-data.com/api/v2/stats/prices/${itemlist}?locations=blackmarket`
          );
          if (blackmarket?.data[0]?.buy_price_min > carleon?.data[0]?.sell_price_min) {
            if(blackmarket?.data[0]?.buy_price_min !== 0 && carleon?.data[0]?.sell_price_min !== 0){
              msg.channel.send(`
              ${blackmarket?.data[0]?.item_id} - Blackmarket Price( ${blackmarket?.data[0]?.buy_price_min} ) -
              Carleon Price ( ${carleon?.data[0]?.sell_price_min} )
              `);
            }
           
          }

        }
      })()

        break;
        case "!stop":
            msg.channel.send("Aktifitas Telah Berhenti");
            break;
    }
  })
// client.login(process.env.DLUNAR)                                             //nek gawe heroku
client.login(process.env.token);    //nek gawe vscode langsung