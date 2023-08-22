const { Events } = require('discord.js');
const { eventChannelId, rules } = require('./eventConfig.json');

module.exports = {
	name: Events.MessageReactionRemove,
	once: false,
	async execute(reaction, user ) {
		console.log("I am here");
        console.log(reaction.users);
		console.log(user);
	},
};
