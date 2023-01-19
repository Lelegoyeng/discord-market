const { CommandInteraction, MessageEmbed, Interaction, InteractionCollector } = require('discord.js');
let region = {
    "brazil": ":flag_br: Brazil",
    "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "india": ":flag_in: India",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za:  South Africa"
};

module.exports = {
    name: "server",
    aliases: ['serverinfo'],
    description: "server info check",
    timeout: 10000,
    category: "info",
    run: async (client, message) => {

        const { guild } = message
        const { name, memberCount, ownerId, botCount } = guild
        const icon = guild.iconURL({dynamic:true})
    
        const embed = await new MessageEmbed()
          .setTitle(`${name}`)
          .setThumbnail(icon)
          .setColor('BLUE')
          .setTimestamp()
          .setFooter(guild.name, icon)
          .addField("**Owner**", `<@${ownerId}>`, true)
          .addField("**Server Created**", `Created 08/12/2018`, true)
          .addField("Created By",`<@!254236109742145537>, <@!496899156950908928>, <@!521646909631496210>, <@!525946523658223617>` )
          .addField("**On The Server**", `${client.guilds.cache.size} servers`,true)
          .addField("**Member**", `${memberCount} Member`,true)
          
          // .addField("**Astronaut**", `${message.guild.members.cache.filter(m => !m.user.bot).size}`, true)
            // .addFields(
            //     {
            //         name: "Members",
            //         value:
            //         `
            //         ${memberCount} Member
                    
            //         `
            //     }
            // )

        return message.channel.send({embeds:[embed]}).catch(err => console.log(err.message));

// module.exports = {
//     name: "server",
//     aliases: ['serverinfo'],
//     description: "server info check",

//     execute(interaction) {
//         const { guild } = interaction;

//         const { } = guild;

//         const Embed = new MessageEmbed()
//         .setColor("PURPLE")
//         .setAuthor(guild.name, guild.iconURL({dynamicL:true}))
//         .setThumbnail(guild.iconURL({dynamic: true}))
//         .addFields(
//             {
//                 name: "GENERAL",
//                 value:
//                 `
//                 Name: ${guild.name}
//                 Created: <t:${parseInt(createdTimestamp / 1000)}:R>
//                 Owner: <@${ownerId}>
                
//                 Description: ${description}
//                 `
//             }
//         )
            
//         interaction.reply({embeds: [Embed]})
    }

    
}