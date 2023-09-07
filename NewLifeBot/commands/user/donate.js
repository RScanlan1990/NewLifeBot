const { SlashCommandBuilder, hyperlink } = require('discord.js');
const url = ' https://ko-fi.com/newlifeserver'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('donate')
        .setDescription('Get a link to donate.'),
    async execute(interaction) {

        let link = hyperlink('Donate here!', url);
        let message = `**All support is greatly appreciated!:heart:** \n Every penny is put back into the server.\n ${link}`;
        await interaction.reply(message)
    }
}