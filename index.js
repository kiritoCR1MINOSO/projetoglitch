const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js")
const config = require("./config.json")
const avast = new Discord.Client()
const fs = require(`fs`)
avast.commands = new Discord.Collection()
avast.aliases = new Discord.Collection()
 

fs.readdir('./comandos', function (err, file) {
    if (err) console.log(err)
    let jsfile = file.filter(f => f.split('.')
    .pop() === 'js')
    if (jsfile.length < 0) {
        console.log('Não foi encontrado nenhum comando')
    }
    jsfile.forEach(function (f, i) {
        let pull = require(`./comandos/${f}`)
    avast.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(function (alias) {
            avast.aliases.set(alias, pull.config.name)
        })
    })
})    

fs.readdir('./owner', function (err, file) {
    if (err) console.log(err)
    let jsfile = file.filter(f => f.split('.')
    .pop() === 'js')
    if (jsfile.length < 0) {
        console.log('Não foi encontrado nenhum comando de owner encontrado')
    }
    jsfile.forEach(function (f, i) {
        let pull = require(`.//owner/${f}`)
        avast.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(function (alias) {
            avast.aliases.set(alias, pull.config.name)
        })
    })
}) 

avast.on("ready", async() => {
    console.log('Bot iniciado com ' + avast.users.size + ' usuários, em ' + avast.channels.size + ' canais de ' + avast.guilds.size + ' servidores.')
    avast.user.setStatus('idle');
        let status = [
            {name: `FLAMENGO PERDENDO DE 3X0 PRO TIME QUE DISPUTOU A SERIE B ANO PASSADO KKKKKKK`, type: `WATCHING`}
        ];
        
        //STREAMING = TRANSMITINDO
        //LISTENING = OUVINDO
        //PLAYING = JOGANDO
        //WATCHING = ASSISTINDO
        
            function setStatus() {
                let randomStatus = status[Math.floor(Math.random() * status.length)];
                avast.user.setPresence({game: randomStatus});
            }
            setStatus();
            setInterval(() => setStatus(), 7000);

        })
        avast.on("message", async message => {

            if (message.author.bot) return;
            if (message.channel.type === "dm") message.channel.send("Supera, Botafogo 2020 melhor !.")
        //Vamos transformar esse ping em menção, vamos não, nós ja transformou :)
        let mention = [`<@${avast.user.id}>`, `<@!${avast.user.id}>`]
        
        mention.find(mention => {
            
                if (message.content === mention) { //agora o bot responde a menção se ele estiver com algum apelido
            
                    message.channel.send(`<:zLipe_Emote:694317803309891684> **|** Olá ${message.author}! Meu prefixo neste servidor é \`${config.prefix}\`, para ver meus comandos use e lembre-se sou Botafoguense HAHAH: \`${config.prefix}help!\``)
            }
        })

        
    if(!message.content.startsWith(config.prefix)) return;

    let args = message.content.slice(config.prefix.length).trim().split(" ")

    let cmd = args.shift().toLowerCase()
    let commandFile = avast.commands.get(cmd) || avast.commands.get(avast.aliases.get(cmd))
    commandFile.run(avast, message, args)
})

avast.login(process.env.TOKEN)