const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (client, message, args) => {

    const duration = moment.duration(client.ontime)

    let u = convertMS(client.uptime)
    let ontime = `**${u.h}**` + "h" + `**${u.m}**` + "m" + `**${u.s}**` + "s"

   const embed = new Discord.RichEmbed()

   .setTitle("**Meu uptime:**")
   .setDescription(`\\😴 Estou online há: ${ontime}!`)
   .setColor('#ec0707')
  
   message.channel.send(embed)

    function convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        return {
            d: d
            , h: h
            , m: m
            , s: s
        };
    };
}

exports.config = {
    name: 'uptime',
    aliases: ['ontime']
}