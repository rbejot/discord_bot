const Command = require('./command')

module.exports = class Help extends Command {
    static match (message) {
        return message.content.startsWith('!help')
    }

    static action (message) {
        message.delete()
        message.reply("Vous voulez mon aide, je vous la donne :\n • !cit \n • !dico + votre_mot \n • !google + votre_recherche \n • !stop \n • !play + lien_youtube \n • !vid + recherche ► play \n • !reddit + votre_recherche \n !gif + votre_recherche \n !fact \n Laissez moi maintenant.")
    }
}
