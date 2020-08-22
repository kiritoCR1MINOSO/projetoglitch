const Discord = require('discord.js');
exports.run = (lyabeta, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("**Insira sua aposta x1.**")

        .setColor("#0051FF")
        .addField("**| __Aposta__**", `${sugestao}`)
        .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.name === "699130173525852220");
    if (!canal) return message.reply("**Não existe nenhum canal com o nome `『⚡』aposta-x1 ` para enviar a sua aposta**");

    message.delete();
    canal.send().then(msg => msg.react(":TDE:").then(r => msg.react(":OofDab:")));
    message.channel.send(`**${message.author}, Sua aposta foi colocada com sucesso!**`);
}

exports.config = {
     name: 'aposta',
    aliases: ['sugestão']
}