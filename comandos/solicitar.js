const Discord = require("discord.js"); 

const bot = new Discord.Client();
exports.run = (client, message, args) => {
        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send(`:x: | use: \b!solicitar <O marque o cara que você quer solicitar e marque algum Staff nivel Admin+, Para o metodo 1 coloque b!solicitar metodo 1 e marque algum staff, e para o metodo 3 coloque b!solicitar metodo 3 e marque algum staff.>\``); 
        message.channel.send('Um canal irá ser criado para vocês dois.')
       
}

exports.config = {
name: 'solicit',
aliases: ['solicitar']
}