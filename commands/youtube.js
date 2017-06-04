const Command = require('./command')
const YoutubeStream = require('youtube-audio-stream')

module.exports = class Play extends Command {
    static match (message) {
        return message.content.startsWith('!play')
    }

    static action (message) {
        let voiceChannel = message.guild.channels
            .filter(function(channel) { return channel.type === 'voice'})
            .first()
        let args = message.content.split(' ')
        message.delete()
        voiceChannel
            .join()
            .then(function (connection) {
                let stream = YoutubeStream(args[1])
                connection.playStream(stream).on('end', function () {
                    // connection.disconnect()
                })
            })
    }
}
