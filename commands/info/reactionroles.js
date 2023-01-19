const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "reactionrole",
    description: "Coba react emoji dibawah!",
    run: async (message, args, Discord, client) => {
        const channel = '890898970728099850';
        const timBiru = message.guild.roles.cache.find(role => role.name === "Tim Biru");
        const timMerah = message.guild.roles.cache.find(role => role.name === "Tim Merah");

        const timBiruEmoji = '🍧';
        const timMerahEmoji = '🍎';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42543')
            .setTitle('Pilih Timmu')
            .setDescription('Pilih emoji dibawah, kamu termasuk tim yang mana\n\n'
                +   `${timBiruEmoji} untuk tim biru\n`
                +   `${timMerahEmoji} untuk tim merah`);


        let messageEmbed = await message.channel.send({embeds:[embed]}).catch(err => console.log(err.message));   
        messageEmbed.react(timBiruEmoji);
        messageEmbed.react(timMerahEmoji);    
        
    }
}