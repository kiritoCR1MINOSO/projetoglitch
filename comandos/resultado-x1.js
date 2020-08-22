var Discord = require('discord.js')
exports.run = (client, message, args)=>{
        var permission = new Discord.RichEmbed()
            .setDescription("**❌ | Você não tem permissão para usar esse comando.**")
        if(!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send(permission)
        var msg = new Discord.RichEmbed()
            .setDescription("Escreva um Resultado assim: **b!resultcode** `<code>`")
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
            
    message.channel.send("Bam bam, e quem ganhou, Foi ?")
    message.channel.send("https://de22-engine.flamingtext.com/netfu/tmp28002/coollogo_com-93331064.png")
    message.delete     
}
exports.config = {
    name: 'resultcode1',
    aliases: ['Resultados']
  
}