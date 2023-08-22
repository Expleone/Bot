const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hyperlink')
		.setDescription('Gives a hyperlink'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		
		await interaction.reply(`[**Click me**](<https://google.com/>)`);
	},
};