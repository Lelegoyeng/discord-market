module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "ping bot",
    timeout: 10000,
    category: "info",
    run: async (client,message) => {
        message.channel.send(`🌙 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}