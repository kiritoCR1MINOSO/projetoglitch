var Discord = require('discord.js')
exports.run = (client, message, args)=>{
        var permission = new Discord.RichEmbed()
            .setDescription("**❌ | Você não tem permissão para usar esse comando.**")
        if(!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send(permission)
        var msg = new Discord.RichEmbed()
            .setDescription("Escreva um embed assim: **b!embed** `<mensagem>`")
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
        var embed = new Discord.RichEmbed()
            .setTitle("**\\📢 | Solicitação x1.:**")
            .setColor("#ec0707")
            .setDescription(`${aviso}`)
            .setFooter(`Pedido por: ${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
    message.channel.send(embed)
    message.channel.send("Pedido de X1!")
    message.delete().catch(O_o=>{});     
}
exports.config = {
    name: 'embed',
    aliases: ['anuncio']
}