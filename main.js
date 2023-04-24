const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Codelyon is online!');
});

client.login('');
