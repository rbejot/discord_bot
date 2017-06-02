const Command = require('./command')

module.exports = class Google extends Command {
    static match (message) {
        return message.content.startsWith('!google')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        message.reply('https://www.google.fr/#q=' + argv.join('%20'))
    }
}
