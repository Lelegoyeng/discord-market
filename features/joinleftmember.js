const { MessageEmbed } = require("discord.js")

module.exports = (client) => {

    const joinid = '890898970728099850'
    const leaveid = '706002230016344074'

    client.on('guildMemberAdd', async member =>{
        const channel = member.guild.channels.cache.get(joinid)
        const embed = await new MessageEmbed()
        .setTitle(`Selamat Datang ${member.user.username}!`)
        .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`Halo Astronaut, welcome to D'Lunar ${member}\nSilahkan baca Peraturan di <#832442794412998686> dan patuhi.\n\nEnjoyy~`)
        .setColor('#33FFEC')
        .setTimestamp()
        .setFooter(`D Lunar`)
        channel.send({embeds:[embed]});
      })

      client.on('guildMemberRemove', async member =>{
        const channel = member.guild.channels.cache.get(leaveid)
        const embed = await new MessageEmbed()
        .setTitle(`Sampai Jumpa! ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`See ya later...`)
        .setColor('#33FFEC')
        .setTimestamp()
        channel.send({embeds:[embed]});
      })
}