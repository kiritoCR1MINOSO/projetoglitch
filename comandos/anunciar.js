var Discord = require('discord.js')
exports.run = (client, message, args)=>{
        var permission = new Discord.RichEmbed()
            .setDescription("**❌ | Você não tem permissão para usar esse comando.**")
        if(!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send(permission)
        var msg = new Discord.RichEmbed()
            .setDescription("Escreva um anúncio assim: **b!anunciar** `<mensagem>`")
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
        var embed = new Discord.RichEmbed()
            .setTitle("**\\📢 | Anuncio:**")
            .setColor("#ec0707")
            .setDescription(`${aviso}`)
            .setFooter(`Anuncio feito por: ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
    message.channel.send(embed)
    message.channel.send("@")
    message.delete().catch(O_o=>{});     
}
exports.config = {
    name: 'anunciar',
    aliases: ['anuncio']
}