const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "easternheartlands",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle('Eastern Heartlands')

        .setImage('https://i.imgur.com/1upAjvK.png')
        
        message.channel.send({embeds: [embed] })
    }

}