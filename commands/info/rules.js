const { CommandInteraction, MessageEmbed, Interaction, InteractionCollector } = require('discord.js');

module.exports = {
    name: "rules",
    timeout: 10000,
    run: async (client, message) => {

        const { guild } = message
        const { name, memberCount, ownerId } = guild
        const icon = guild.iconURL({dynamic:true})
    
        const embed1 = await new MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/829319311051063357/930201203051204689/wc-bg-dlunar.gif')
        .setColor('#2f3136')

    
        const embed2 = await new MessageEmbed()
        .setTitle('***WELCOME***  <a:impostor:840241323541266502>')
        .setColor('#3498DB')
        .setDescription(`Hai !! karena kalian sudah mendarat di bulan jadiiii... **SELAMAT DATAAANG KALIAN DI D'LUNAR !!!**
aku harap kalian di discord ini bisa mencari temen baru untuk main game, teman ngobrol, teman tapi mesra *eh.

Dan, karena server ini baru, jadi kalau ada masalah atau apapun itu. Kalian bisa pm <@&571667804089090081> atau <@&702018856062812321>  yaa, makasihhh atas partisipasinyaa!`)
          .setFooter(guild.name, icon)

        const embed3 = await new MessageEmbed()
        // .setImage('https://cdn.discordapp.com/attachments/829319311051063357/930201226916823071/rules-DLunar.gif')
        .setImage('https://cdn.discordapp.com/attachments/829319311051063357/987356812984582215/banner_dc.png')
        .setColor('#2f3136')


        const embed4 = await new MessageEmbed()
        .setColor('#bf00ff')
        .setTitle('**PERATURAN SERVER** <a:tactibear:736001827031744682>')
        .setDescription(`
        <a:bintang:917994350959534080> Saling menghormati sesama penghuni discord.

<a:bintang:917994350959534080> Dilarang Spam berlebihan, Merusuh dan usahakan chat di channel yang sesuai.

<a:bintang:917994350959534080> Kalo mau Promosi silahkan hubungi admin yang ada.

<a:bintang:917994350959534080> Bebas post Foto/Video/Meme di <#547351197934288896> (tidak berbau pornografi)

ENJOY GAISS<a:rumiaDance:890881749343670292>
    `)   
    .setFooter('Peraturan diatas bisa berubah sewaktu-waktu');

        const embed5 = await new MessageEmbed()
        .setColor('#3498DB')
        .setTitle('<a:star:890888997969215488>    ***SERVER LINK***     <a:star:890888997969215488>')
        .setDescription(`https://discord.gg/a96HGttNG7`)

        
        return message.channel.send({embeds:[embed1, embed2, embed3, embed4,embed5]}).catch(err => console.log(err.message));

    }

}