const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Reddit extends Command {
    static match (message) {
        return message.content.startsWith('!reddit')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        message.reply('https://www.reddit.com/r/' + argv.join('+'))
    }
}
