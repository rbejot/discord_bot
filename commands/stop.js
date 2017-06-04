const Command = require('./command')

module.exports = class Jingle extends Command {
    static match (message) {
        return message.content.startsWith('!stop')
    }

    static action (message) {
        message.delete()
        let voiceChannel = message.guild.channels
            .filter(function(channel) { return channel.type === 'voice'})
            .first()
        voiceChannel
            .leave()
    }
}
