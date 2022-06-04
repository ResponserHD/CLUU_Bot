const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "cloudcoilcanyon",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Cloud Coil Canyon')

        .setImage('https://i.imgur.com/kSjjL2G.png')
        
        message.channel.send({embeds: [embed] })
    }

}