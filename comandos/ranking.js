const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()

.setTitle("**Ranking:**")
.setDescription("**Status:** \n Ranking em andamento \n 1º Lugar: <@567099409930649610>, 15 pontos \n 2ºlugar: <@708924169517137971>, 5 pontos \n 3º lugar: Ninguém \n 4º lugar: Ninguém \n 5º Lugar Ninguém ")
.setColor("#ec0707")

message.channel.send(embed)
}


exports.config = {
name: "ranking",
aliases: ["novidades"]
}