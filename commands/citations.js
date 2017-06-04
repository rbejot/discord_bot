const Command = require('./command')
const cheerio = require('cheerio')
const request = require('request')

module.exports = class Citations extends Command {
    static match (message) {
        return message.content.startsWith('!cit')
    }

    static action (message) {
        message.delete()
        this.etymologie('http://citation-celebre.leparisien.fr/citations/' + Math.floor((Math.random() * 60000) + 1), message)
    }

    static etymologie (page, message) {
        var url = page
        var def, auteur
        request(url, function (error, response, body) {
            var $ = cheerio.load(body),
            def = $("q").text();
            auteur = $(".auteurLien").text()
            message.channel.send("@everyone " + def + " - " + auteur)
        })
    }
}
