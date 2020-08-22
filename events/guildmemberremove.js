const Discord = require('discord.js');

module.exports = async (client, member, message) => {

let embed = new Discord.RichEmbed()

.setTitle(":sob: Saiu do servidor ")
.setColor("#ec0707")
.setThumbnail(member.user.avatarURL)
.setDescription(`${member} saiu do nosso servidor.`)
.setFooter(`ID do membro: ${member.id}`, member.user.avatarURL)

let entrada = client.channels.get("742579362058207316")
.send(embed);

}