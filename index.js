require('module-alias/register')
require('dotenv').config()
const { MessageEmbed } = require("discord.js")
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
        msg.channel.send('Get Data Market Price...')
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
            const tax = blackmarket?.data[0]?.buy_price_min * 0.07
            const totalprice = blackmarket?.data[0]?.buy_price_min + tax
            if(totalprice > carleon?.data[0]?.sell_price_min){
              const profitnow = totalprice - carleon?.data[0]?.sell_price_min
              const embed = await new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
              .setAuthor({ name: `🍟 ${itemnama[i]}` })
              .setDescription('Quality Normal')
              .addFields({name: 'Black Market', value: blackmarket?.data[0]?.buy_price_min.toString(), inline: true})
              .addFields({name: 'Caerleon Market', value: carleon?.data[0]?.sell_price_min.toString(), inline: true})
              .addFields({name: 'Profit', value: profitnow.toString(), inline: true})
              .setColor('#33FFEC')
              .setTimestamp()
              msg.channel.send({embeds:[embed]})
            }
          }
        }

        if(blackmarket?.data[1]?.buy_price_min > carleon?.data[1]?.sell_price_min){
          if(blackmarket?.data[1]?.buy_price_min !== 0 && carleon?.data[1]?.sell_price_min !== 0){
            const tax = blackmarket?.data[1]?.buy_price_min * 0.07
            const totalprice = blackmarket?.data[1]?.buy_price_min + tax
            if(totalprice > carleon?.data[1]?.sell_price_min){
              const profitnow = totalprice - carleon?.data[1]?.sell_price_min
              const embed = await new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
              .setAuthor({ name: `🍟 ${itemnama[i]}` })
              .setDescription('Quality Good')
              .addFields({name: 'Black Market', value: blackmarket?.data[1]?.buy_price_min.toString(), inline: true})
              .addFields({name: 'Caerleon Market', value: carleon?.data[1]?.sell_price_min.toString(), inline: true})
              .addFields({name: 'Profit', value: profitnow.toString(), inline: true})
              .setColor('#33FFEC')
              .setTimestamp()
              msg.channel.send({embeds:[embed]})
            }
          }
        }

        if(blackmarket?.data[2]?.buy_price_min > carleon?.data[2]?.sell_price_min){
          if(blackmarket?.data[2]?.buy_price_min !== 0 && carleon?.data[2]?.sell_price_min !== 0){
            const tax = blackmarket?.data[2]?.buy_price_min * 0.07
            const totalprice = blackmarket?.data[2]?.buy_price_min + tax
            if(totalprice > carleon?.data[2]?.sell_price_min){
              const profitnow = totalprice - carleon?.data[2]?.sell_price_min
              const embed = await new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
              .setAuthor({ name: `🍟 ${itemnama[i]}` })
              .setDescription('Quality Outstanding')
              .addFields({name: 'Black Market', value: blackmarket?.data[2]?.buy_price_min.toString(), inline: true})
              .addFields({name: 'Caerleon Market', value: carleon?.data[2]?.sell_price_min.toString(), inline: true})
              .addFields({name: 'Profit', value: profitnow.toString(), inline: true})
              .setColor('#33FFEC')
              .setTimestamp()
              msg.channel.send({embeds:[embed]})
            }
          }
        }

        if(blackmarket?.data[3]?.buy_price_min > carleon?.data[3]?.sell_price_min){
          if(blackmarket?.data[3]?.buy_price_min !== 0 && carleon?.data[3]?.sell_price_min !== 0){
            const tax = blackmarket?.data[3]?.buy_price_min * 0.07
            const totalprice = blackmarket?.data[3]?.buy_price_min + tax
            if(totalprice > carleon?.data[3]?.sell_price_min){
              const profitnow = totalprice - carleon?.data[3]?.sell_price_min
              const embed = await new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
              .setAuthor({ name: `🍟 ${itemnama[i]}` })
              .setDescription('Quality Excellent')
              .addFields({name: 'Black Market', value: blackmarket?.data[3]?.buy_price_min.toString(), inline: true})
              .addFields({name: 'Caerleon Market', value: carleon?.data[3]?.sell_price_min.toString(), inline: true})
              .addFields({name: 'Profit', value: profitnow.toString(), inline: true})
              .setColor('#33FFEC')
              .setTimestamp()
              msg.channel.send({embeds:[embed]})
            }
          }
        }

        if(blackmarket?.data[4]?.buy_price_min > carleon?.data[4]?.sell_price_min){
          if(blackmarket?.data[4]?.buy_price_min !== 0 && carleon?.data[4]?.sell_price_min !== 0){
            const tax = blackmarket?.data[4]?.buy_price_min * 0.07
            const totalprice = blackmarket?.data[4]?.buy_price_min + tax
            if(totalprice > carleon?.data[4]?.sell_price_min){
              const profitnow = totalprice - carleon?.data[4]?.sell_price_min
              const embed = await new MessageEmbed()
              .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
              .setAuthor({ name: `🍟 ${itemnama[i]}` })
              .setDescription('Quality MasterPiece')
              .addFields({name: 'Black Market', value: blackmarket?.data[4]?.buy_price_min.toString(), inline: true})
              .addFields({name: 'Caerleon Market', value: carleon?.data[4]?.sell_price_min.toString(), inline: true})
              .addFields({name: 'Profit', value: profitnow.toString(), inline: true})
              .setColor('#33FFEC')
              .setTimestamp()
              msg.channel.send({embeds:[embed]})
            }
          }
        }

     }, 3000);
      break;
      case "!stop":
      msg.channel.send("End!");
      clearInterval(interval)
        break;

        case "!tesembed":
          const embed = await new MessageEmbed()
          .setThumbnail('https://cdn.discordapp.com/icons/760431384127864842/cfa7adbca196b7c7965525d4c9993eb5.webp?size=96')
          .setAuthor({ name: `🍟 Price BroadSword 6.1` })
          .setDescription('Quality Normal')
          .addFields({name: 'Black Market', value: '123', inline: false})
          .addFields({name: 'Caerleon Market', value: '123', inline: false})
          .addFields({name: 'Profit', value: '333', inline: false})
          .setColor('#33FFEC')
          .setTimestamp()
          msg.channel.send({embeds:[embed]});
          clearInterval(interval)
            break;

    }
  })
// client.login(process.env.DLUNAR)                                             //nek gawe heroku
client.login(process.env.token);    //nek gawe vscode langsung