const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()

.setTitle("**TEMPORADA 1:**")
.setDescription("**Status:** \n Tempoarada 1 em andamento \n 1º Lugar: Ninguém \n 2º Lugar: Ninguém \n 3º Lugar: Ninguém \n 4º Lugar: Ninguém \n 5º Lugar Ninguém \n Observação: apenas os 4primeiros lugares ficarão classificados ")
.setColor("#ec0707")

message.channel.send(embed)
}


exports.config = {
name: "temporada",
aliases: ["novidades"]
}