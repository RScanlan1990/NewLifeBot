const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`New Life Hoorah! Logged in as ${client.user.tag}`);
	},
};