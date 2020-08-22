const Discord = require("discord.js");

const bot = new Discord.Client();
exports.run = (client, message, args) => {
        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send(`:errado: | use: \`b!my rank\``);
        message.channel.send("<@722097714749243532> Sua posição no rank é:0º (Você não se encontra no ranking.)")
       
}
    
exports.config = {
name: 'fak3',
aliases: ['meurank']
}