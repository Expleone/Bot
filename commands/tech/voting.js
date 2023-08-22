const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('voting')
		.setDescription('Creates a new voting'),
	async execute(interaction) {
		
	},
};