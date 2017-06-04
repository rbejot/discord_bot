const Command = require('./command')
const request = require('request')
const env = require('../env.js')

module.exports = class Cleverbot extends Command {
    static match (message) {
        return message.content.toLowerCase().startsWith('rachid')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        argv = argv.join(' ')
        this.clever('http://www.cleverbot.com/getreply?key=' + env.cleverbot + '&input=' + argv, message)
    }

    static clever(url, message) {
        request(url, function (error, response, body) {
            var discussion = JSON.parse(body)
            message.reply(discussion["clever_output"])
        })
    }
}
