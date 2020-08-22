const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()

.setTitle("**Atualizações Recentes:**")
.setDescription("**Novidades:** \n 1.5: Bot normalizado, versão estavel, sem bugs, package de comandos adicionados.  ")
.setColor("#ec0707")

message.channel.send(embed)
}


exports.config = {
name: "updates",
aliases: ["novidades"]
}