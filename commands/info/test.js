const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "test",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('CLUU Bot is working')
                
        message.channel.send({embeds: [embed] })
    }

}