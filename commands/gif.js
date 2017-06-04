const Command = require('./command')
const request = require('request')

module.exports = class Gif extends Command {
    static match(message) {
        return message.content.startsWith('!gif')
    }

    static action(message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        this.gif('http://api.giphy.com/v1/gifs/search?q=' + argv.join('+') +'&api_key=dc6zaTOxFJmzC', message)
    }

    static gif(url, message) {
        var display
        request(url, function (error, response, body) {
            var my_gif = JSON.parse(body)
            var res = my_gif["data"][0]["images"]["fixed_height"]["url"]
            message.reply(res)
        })
    }
}
