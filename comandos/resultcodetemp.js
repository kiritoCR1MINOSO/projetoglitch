var Discord = require('discord.js')
exports.run = (client, message, args)=>{
        var permission = new Discord.RichEmbed()
            .setDescription("**❌ | Você não tem permissão para usar esse comando.**")
        if(!message.member.hasPermission("MEMBER"))  return message.channel.send(permission)
        var msg = new Discord.RichEmbed()
            .setDescription("Escreva um Resultado assim: **b!resultcodetemp** `<code>`")
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
            
    message.channel.send("Bam bam, e quem ganhou, Foi ?")
    message.channel.send("https://de6-engine.flamingtext.com/netfu/tmp28001/coollogo_com-126225.png")
    message.delete     
}
exports.config = {
    name: 'resultcodetemp',
    aliases: ['Resultados']
  
}