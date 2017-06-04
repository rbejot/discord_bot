const Command = require('./command')
const fs = require('fs')

module.exports = class Google extends Command {
    static match (message) {
        if (message.content[0] != "!" && message.content[0] != "<" && message.content[0] != "h")
            return message.content
    }

    static action (message) {
        var contentF = fs.readFileSync('./commands/speak/speak.json')
        var jsonContent = JSON.parse(contentF)
        let argv = message.content.toLowerCase().split(' ')
        for (var i = 0; argv[i];i++) {
            if (jsonContent[argv[i]]) {
                if (jsonContent[argv[i]] !== "null")
                    message.reply(jsonContent[argv[i]])
            }
            else {
                var obj = require('./speak/speak.json')
                obj[argv[i]] = "null"
                fs.writeFile('./commands/speak/speak.json', JSON.stringify(obj), function (err) {
                    console.log(err);
                });
            }
        }
    }
}
