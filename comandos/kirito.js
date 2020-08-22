const Discord = require("discord.js");

const bot = new Discord.Client();
exports.run = (client, message, args) => {
   if (message.author.id !== '649024673929232385' && message.author.id !== '649024673929232385') return message.channel.send("<:x:662457334274195466> **|** Você não tem acesso, para executar esse comando.")
        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send(`:errado: | use: \`b!my rank\``);
        message.channel.send("<@649024673929232385> Sua posição no rank é:0º (Você não se encontra no ranking.)")
      
}
    
exports.config = {
name: 'my',
aliases: ['meurank']
}