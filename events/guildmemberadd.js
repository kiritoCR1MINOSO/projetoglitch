const Discord = require('discord.js');

module.exports = async (client, member, message) => {

let embed = new Discord.RichEmbed()

.setTitle(":wave: Bem vindo(a)")
.setColor("#ec0707")
.setThumbnail(member.user.avatarURL)
.setDescription(`Eae, ${member}  Seja bem vindo a Família TDW :BlobAmor:

• Leia as #『📌』regras para não cometer quaisquer tipo de infração; :Information:
• Leia a #『📋』staff-list, para saber quem é os superioes do clã; :BlotStaff:
• E também não divulge esse servidor pra ninguém desconhecido (que não é do clã), caso divulgar ban permanente. :warning:


• Então Soldado, divirta-se com seu novo clã, soldado! :wink: `)
.setFooter(`ID do membro: ${member.id}`, member.user.avatarURL)

let entrada = client.channels.get("742578631951384660")
.send(embed);

let role = member.guild.roles.get("742582941091233844")
member.addRole(role.id);
}