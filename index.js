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
  const itemnama = array.map((e) => {
    return e.value;
  });

let interval
let i = 0
client.on('message', async msg => {
    switch (msg.content) {

      case "!start":
     interval = setInterval (async function(){
      i = i+1
      console.log(i)
      const carleon = await axios.get(
        `https://www.albion-online-data.com/api/v2/stats/prices/${itemlist[i]}?locations=caerleon`
      );
    
      const blackmarket = await axios.get(
        `https://www.albion-online-data.com/api/v2/stats/prices/${itemlist[i]}?locations=blackmarket`
      );

        if(blackmarket?.data[0]?.buy_price_min > carleon?.data[0]?.sell_price_min){
          if(blackmarket?.data[0]?.buy_price_min !== 0 && carleon?.data[0]?.sell_price_min !== 0){
            msg.channel.send(`
            Quality Normal - ${itemnama[i]} - Blackmarket Price( ${blackmarket?.data[0]?.buy_price_min} ) -
            Carleon Price ( ${carleon?.data[0]?.sell_price_min} )
            `)
          }
        }

        if (blackmarket?.data[1]?.buy_price_min > carleon?.data[1]?.sell_price_min) {
          if(blackmarket?.data[1]?.buy_price_min !== 0 && carleon?.data[1]?.sell_price_min !== 0){
            msg.channel.send(`
            Quality Good - ${itemnama[i]} - Blackmarket Price( ${blackmarket?.data[1]?.buy_price_min} ) -
            Carleon Price ( ${carleon?.data[1]?.sell_price_min} )
            `);
          }
        }

        if (blackmarket?.data[2]?.buy_price_min > carleon?.data[2]?.sell_price_min) {
          if(blackmarket?.data[2]?.buy_price_min !== 0 && carleon?.data[2]?.sell_price_min !== 0){
            msg.channel.send(`
            Quality Outstanding - ${itemnama[i]} - Blackmarket Price( ${blackmarket?.data[2]?.buy_price_min} ) -
            Carleon Price ( ${carleon?.data[2]?.sell_price_min} )
            `);
          }
        }

        if (blackmarket?.data[3]?.buy_price_min > carleon?.data[3]?.sell_price_min) {
          if(blackmarket?.data[3]?.buy_price_min !== 0 && carleon?.data[3]?.sell_price_min !== 0){
            msg.channel.send(`
            Quality Excelent - ${itemnama[i]} - Blackmarket Price( ${blackmarket?.data[3]?.buy_price_min} ) -
            Carleon Price ( ${carleon?.data[3]?.sell_price_min} )
            `);
          }
        }

        if (blackmarket?.data[4]?.buy_price_min > carleon?.data[4]?.sell_price_min) {
          if(blackmarket?.data[4]?.buy_price_min !== 0 && carleon?.data[4]?.sell_price_min !== 0){
            msg.channel.send(`
            Quality MasterPiece - ${itemnama[i]} - Blackmarket Price( ${blackmarket?.data[4]?.buy_price_min} ) -
            Carleon Price ( ${carleon?.data[4]?.sell_price_min} )
            `);
          }
        }

     }, 3000);
      break;
      case "!stop":
      msg.channel.send("End!");
      clearInterval(interval)
        break;
    }
  })
// client.login(process.env.DLUNAR)                                             //nek gawe heroku
client.login(process.env.token);    //nek gawe vscode langsung