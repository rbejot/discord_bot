const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Dico = require('./commands/dico')
const Citation = require('./commands/citations')
const env = require('./env.js')

bot.on('ready', function() {
    bot.user.setAvatar('./avatar/84431199dfee933296c49be8a66ee074.jpg').catch(console.error)
    bot.user.setGame(env.Game).catch(console.error)
})

bot.on('message', function (message) {
    if (message.content == 'ping') {
        message.channel.send('pong')
    }
    let commandUsed = Google.parse(message) || Ping.parse(message) || Dico.parse(message) || Citation.parse(message)
})

bot.on('guildMemberAdd', function(member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenue' + member.displayName)
    }).catch(console.error)
})

bot.login(env.token)
