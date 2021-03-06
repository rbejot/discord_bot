const Discord = require('discord.js')
const bot = new Discord.Client()

const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Dico = require('./commands/dico')
const Citation = require('./commands/citations')
const Help = require('./commands/help')
const Youtube = require('./commands/youtube')
const Jingle = require('./commands/jingle')
const Video = require('./commands/video')
const Reddit = require('./commands/reddit')
const Stop = require('./commands/stop')
const Dis = require('./commands/discord')
const Gif = require('./commands/gif')
const Fact = require('./commands/fact')
// const Interact = require('./commands/interact')
const Cleverbot = require('./commands/cleverbot')

const env = require('./env.js')

bot.on('ready', function() {
    bot.user.setAvatar('./avatar/84431199dfee933296c49be8a66ee074.jpg').catch(console.error)
    bot.user.setGame(env.game).catch(console.error)
})

bot.on('message', function (message) {
    if (message.content == 'ping') {
        message.channel.send('pong')
    }
    let commandUsed = Google.parse(message) || Ping.parse(message) || Dico.parse(message) || Citation.parse(message) || Help.parse(message) || Video.parse(message) || Youtube.parse(message) || Reddit.parse(message) || Stop.parse(message) || Dis.parse(message) || Gif.parse(message) || Fact.parse(message) || Cleverbot.parse(message)
})

bot.on('guildMemberAdd', function(member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenue' + member.displayName)
    }).catch(console.error)
})

bot.login(env.token)
