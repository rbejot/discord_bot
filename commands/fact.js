const Command = require('./command')
const request = require('request')

module.exports = class Fact extends Command {
    static match(message) {
        return message.content.startsWith('!fact')
    }

    static action(message) {
        message.delete()
        var random = Math.floor((Math.random() * 2) + 1)
        if (random == 1)
            this.fact('http://numbersapi.com/random/year?json', message)
        else
            this.fact('http://numbersapi.com/random/date?json', message)
    }

    static fact(url, message) {
        var display
        request(url, function (error, response, body) {
            var my_fact = JSON.parse(body)
            var res = my_fact["text"]
            message.reply(res)
        })
    }
}
