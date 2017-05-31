module.exports = class Google {
    static match (message) {
        return message.content.startsWith('!google')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.reply('https://www.google.fr/#q=' + argv.join('%20'))
    }
}
