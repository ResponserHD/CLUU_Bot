const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "southernheartlands",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Southern Heartlands')

        .setImage('https://i.imgur.com/hrnNh4A.png')
        
        message.channel.send({embeds: [embed] })
    }

}