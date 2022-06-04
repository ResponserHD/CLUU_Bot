const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "aliegraplateau",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Aliegra Plateau')

        .setImage('https://i.imgur.com/uvryp1q.png')
        
        message.channel.send({embeds: [embed] })
    }

}