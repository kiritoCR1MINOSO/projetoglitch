const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const m = await message.channel.send("Calculando...");
    let embed = new Discord.RichEmbed()

    .setTitle("**🏓 Pong!**")
    .setColor('#02f80a')
    .setDescription(`A Latência é de **${m.createdTimestamp - message.createdTimestamp}**ms.\n \⚡ A Latência da API é **${Math.round(bot.ping)}**ms.`)

  m.edit(embed);

    }

  exports.config = {
    name: 'ping',
    aliases: ['pingbot'],
    category: 'random'
}