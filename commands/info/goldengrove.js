const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "goldengrove",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Golden Grove')

        .setImage('https://i.imgur.com/WoQIlzc.png')
        
        message.channel.send({embeds: [embed] })
    }

}