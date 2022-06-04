const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "sereneforest",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Serene Forest')

        .setImage('https://i.imgur.com/qqFnLrh.png')
        
        message.channel.send({embeds: [embed] })
    }

}