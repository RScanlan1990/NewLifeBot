const { SlashCommandBuilder, hyperlink } = require('discord.js');
const url = 'https://space-engineers.com/server/212606/'


module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Get a link to vote.'),
    async execute(interaction) {
        let link = hyperlink('Vote here!', url);
        await interaction.reply(link)
    }
}