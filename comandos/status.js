const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()

.setTitle("**Status do Bot:**")
.setDescription("**Status:** \n Bot OK ")
.setColor("#ec0707")

message.channel.send(embed)
}


exports.config = {
name: "status",
aliases: ["novidades"]
}