require('dotenv').config();

const wait = require('node:timers/promises').setTimeout;
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Discord, EmbedBuilder, ActivityType, AttachmentBuilder, Partials, RoleManager } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ 
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});


//завантаження команд бота
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


//завантаження івентів
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

//завантаження бота
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
	client.user.setPresence({ activities: [{ name: 'навчання' }], status: 'online' });
  })
//webhook
client.on("ready", () => {
	const embed = new EmbedBuilder()
	.setTitle('Some Title')
	.setColor(0x00FFFF);
})




//виконання команди
client.on(Events.InteractionCreate, async interaction => {
	if (interaction.isChatInputCommand()) { 
		const command = client.commands.get(interaction.commandName);

		console.log(interaction);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	}else if(interaction.isButton()) {
		console.log(interaction);
		if (interaction.customId === 'rulesAgree') {

			const role = interaction.guild.roles.cache.get('1129894642641539132');
			await interaction.member.roles.add(role);
			interaction.deferUpdate()
				.then(console.log)
				.catch(console.error);
		}
		console.log('---------------------------------------------------------')
	}
});



client.login(token);

