const { SlashCommandBuilder, hyperlink } = require('discord.js');
const url = 'https://steamcommunity.com/sharedfiles/filedetails/?id=2962678056'


module.exports = {
    data: new SlashCommandBuilder()
        .setName('mods')
        .setDescription('Get a link to the mod collection.'),
    async execute(interaction) {
        let link = hyperlink('Mod collection', url);
        await interaction.reply(link)
    }
}