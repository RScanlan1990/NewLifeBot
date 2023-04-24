const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Codelyon is online!');
});

client.login('MTA5NTQwNTgzNTE3MTEzOTczNg.GRDaR7.fYxDTNmB4CXN34MV0eCa4-g8RLjNuJCbYAcHXo');
