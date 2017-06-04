const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Dico extends Command {
    static match (message) {
        return message.content.startsWith('!dico')
    }

    static action (message) {
        let argv = message.content.split(' ')
        argv.shift()
        message.delete()
        this.etymologie('https://fr.wiktionary.org/wiki/' + argv.join('%20'), message, argv)
    }

    static etymologie (page, message, argv) {
        var url = page
        request(url, function (error, response, body) {
          if (!error) {
            var $ = cheerio.load(body),
            def = $("dd").text();
            if (!def) {
                message.reply("Je ne parle pas cette langue barbare.")
            } else { message.reply("Voici l'étymologie de " + argv + " : " + def) }
          } else {
            message.reply("Je ne parle pas cette langue.")
          }
        });
    }
}
