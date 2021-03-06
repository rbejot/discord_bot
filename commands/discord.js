const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Google extends Command {
    static match (message) {
        return message.content.startsWith('!discord')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        message.reply('https://discord.js.org/#/docs/main/stable/general/welcome')
    }
}
