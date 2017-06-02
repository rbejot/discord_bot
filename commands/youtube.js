const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Youtube extends Command {
    static match (message) {
        return message.content.startsWith('!youtube')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        this.video('https://www.youtube.com/results?search_query=' + argv.join('%20'), message)
    }

    static video (page, message) {
        var url = page
        var best_vid
        request(url, function (error, response, body) {
            var $ = cheerio.load(body),
            best_vid = $(".yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-sessionlink      spf-link ").text();
            console.log(best_vid)
        })
    }
}
