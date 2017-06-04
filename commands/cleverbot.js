const Command = require('./command')
const request = require('request')
const env = require('../env.js')

module.exports = class Cleverbot extends Command {
    static match (message) {
        var rachid = message.content.toLowerCase().split(' ')
        if (rachid.indexOf('rachid') != -1 || rachid.indexOf('rachid,') != -1)
            return message.content
    }

    static action (message) {
        let argv = message.content.toLowerCase().split(' ')
        var filtered = argv.filter(function(element){
            return element !== "rachid"
        })
        console.log(filtered)
        this.clever('http://www.cleverbot.com/getreply?key=' + env.cleverbot + '&input=' + filtered, message)
    }

    static clever(url, message) {
        request(url, function (error, response, body) {
            var discussion = JSON.parse(body)
            message.reply(discussion["clever_output"])
        })
    }
}
