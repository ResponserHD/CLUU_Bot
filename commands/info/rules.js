const {Client, Attachment, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: "rules",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
       
        const embed = new MessageEmbed()
        .setColor('#880ED4')
        .setTitle("Official Ni no Kuni: Cross Worlds Philippines Discord Server Rules")
        .setDescription("testing rules")
        .addFields(
            {name: '1. No harassment of other platers.', value: 'Racism, sexism, xenophobia, transphobia, homophobia, misogyny, and other kinds of discriminatory speech are not tolerated. Please refrain from targeting individuals and posting personal information.', inline: false},
            {name: '2. No inappropriate language, images, or emoticons.', value: 'Any NSFW, suggestive or explicit content is not allowed under any circumstances. Please be respectful of others at all times.', inline: false},
            {name: '3. No spamming or flooding the chat with messages, images, or emoticons.', value: 'This includes repeated use of bot commands, misuse of tags, rapidly switching voice channels, or tagging players who are not active in the chat.', inline: false},
            {name: '4. No discussion on cheating or using exploits.', value: 'We do not allow anyone to exploit, distribute or publicly inform other members of any game error, miscue or bug which gives an unintended advantage.', inline: false},
            {name: '5. Use the channels appropriately.', value: 'This includes using the right channel for the right language. Failure to follow channel guidelines may result in loss of permissions. Relevant information about the purpose of each channel can be found in the channel topic and/or pinned messages at the top.', inline: true},
            {name: '6. Admins and Moderators have the final say.', value: 'To keep the server safe and healthy for all players at all times, the admins and moderators have the final say in matters of dispute. This includes the right to delete/edit any post.', inline: false},
            {name: '7. No inappropriate nicknames.', value: 'Please refrain from using offensive nicknames or ones with unusual or unreadable Unicode. The admins and moderators reserve the right to change nicknames when necessary.', inline: false}
            )
        
        .setImage('https://i.imgur.com/JSJ4FsP.png')

        message.channel.send({embeds: [embed] })
    }

}