module.exports = (client) => {
    client.on("message", message => {

        function reply(ask, answer){
            if(message.content.toLowerCase() === ask && !message.author.bot) {
                return message.channel.send(answer)
                
            }
            
        }
   
            reply('halo', 'halo juga')
        
        // reply('asu', 'emang asu si avell')

    })
}