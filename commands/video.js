const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')
const YoutubeStream = require('youtube-audio-stream')

module.exports = class Video extends Command {
    static match (message) {
        return message.content.startsWith('!vid')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        this.best_vid('https://www.youtube.com/results?q=' + argv.join('+') + '&sp=EgIQAQ%253D%253D', message)
    }

    static best_vid(url, message) {
        var video
        request(url, function (error, response, body) {
            var $ = cheerio.load(body),
            video = $(".yt-lockup-title ").children("a").attr("href");
            let voiceChannel = message.guild.channels
                .filter(function(channel) { return channel.type === 'voice'})
                .first()
            voiceChannel.leave()
            voiceChannel
                .join()
                .then(function (connection) {
                    let stream = YoutubeStream('https://www.youtube.com' + video)
                    message.channel.send('https://www.youtube.com' + video)
                    connection.playStream(stream).on('end', function () {
                        // connection.disconnect()
                        // message.channel.send('https://www.youtube.com' + video)
                    })
                })
        })
    }
}
