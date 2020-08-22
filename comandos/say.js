const Discord = require("discord.js");

const bot = new Discord.Client();
exports.run = (client, message, args) => {
        const saywhat = args.join(" ")
        var permission = new Discord.RichEmbed()
            .setDescription("**❌ | Você não tem permissão para usar esse comando.**")
        if(!message.member.hasPermission("MANAGE_CHANNELS"))  return message.channel.send(permission)
        if (saywhat < 1) return message.channel.send(`:errado: | use: \`b!say <mensagem>\``);
          message.delete();
        message.channel.send(saywhat)
       
}

exports.config = {
name: 'say',
aliases: ['falar']
}