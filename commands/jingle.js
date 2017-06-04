const Command = require('./command')

module.exports = class Jingle extends Command {
    static match (message) {
        return message.content
    }

    static action (message) {
        let argv = message.content
        if (message.content === "!stop")
            message.delete()
        let voiceChannel = message.guild.channels
            .filter(function(channel) { return channel.type === 'voice'})
            .first()
        voiceChannel
            .join()
            .then(function (connection) {
                connection.playFile('./sounds/'+ argv + '.mp3')
            })
    }
}
