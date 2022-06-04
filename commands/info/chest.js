const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "chest",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const chest = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle("Official Ni no Kuni: Cross Worlds Philippines Discord Server Announcements")
        .setDescription("Hi Adventurers!\nWe know that you're grinding thoroughly in the game and enjoying your journey as well.\nYou might have encountered a chest, while rummaging, travelling, or doing a task at Ni No Kuni: Cross Worlds. Do not just pass by them! They are not just there for aesthetics! These chests may contain item/s that may be helpful for your journey. With that, here are some clues (photo/s below) as to where you may be able to find them.\nGoodluck on your journey!\n\nPICTURE NOT MINE\n\n#NiNoKuniCrossWorlds #NINOKUNIL1")

        message.channel.send({embeds: [chest] })
    }

}