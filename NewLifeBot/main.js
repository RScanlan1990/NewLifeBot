
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

client.once(Events.ClientReady, client => {
    console.log(`NewLife Bot Hoorah! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    
    try {
        await command.execute(interaction);
    } catch(error) {
        console.error(error);
        if(interaction.replied || interaction.deferred) {
            await interaction.followUp({content: `There was an error!`, ephemeral: true});
        } else {
            await interaction.reply({content: `There was an error!`, ephemeral: true});
        }
    }
});

client.on('guildMemberAdd', member => {
    let spaceCadetRole = member.guild.roles.cache.find(role => role.name == 'Space Cadet');
    member.roles.add(spaceCadetRole);
    member.guild.channels.cache.get('1084794447407087746').send(`Welcome!`);
});
    
client.login('');
