const Discord = require('discord.js');

exports.run = (client, message, args) => {

let embed = new Discord.RichEmbed()

.setTitle("**Possiveis atualizações:**")
.setDescription("**Novidades:** \n 1.4 = Novos comandos \n 1.5 Comandos bons sairão da versão de testes BETA. \n 1.6 Novas utilidades \n 1.7 Uma grande atualização está por vir hehe ")
.setColor("#ec0707")

message.channel.send(embed)
}


exports.config = {
name: "previews",
aliases: ["novidades"]
}