const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Google extends Command {
    static match (message) {
        return message.content.startsWith('!google')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        message.reply('http://www.google.com/search?q=' + argv.join('+')+ '&btnI')
    }
}
