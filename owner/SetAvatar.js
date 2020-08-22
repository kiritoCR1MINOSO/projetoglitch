const Discord = require('discord.js');

exports.run = async (lya, message, args) => {

 if (message.author.id !== '708924169517137971' && message.author.id !== '708924169517137971') return message.channel.send("<:x:662457334274195466> **|** Você não tem acesso, para executar esse comando.")

 lya.user.setAvatar(args[0])

message.channel.send(":white_check_mark: **|** Avatar alterado com sucesso!")
}

exports.config = {
    name: 'setavatar',
    aliases: []
}