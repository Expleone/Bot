const { Client, EmbedBuilder, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const embed = new EmbedBuilder()
	.setTitle('Some Title')
	.setColor(0x00FFFF);

client.once(Events.ClientReady, async () => {
	const channel = client.channels.cache.get('1115192794965880923');
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.find(wh => wh.token);

		if (!webhook) {
			return console.log('No webhook was found that I can use!');
		}

		await webhook.send({
			content: 'Webhook test',
			username: 'Квадратна республіка',
			avatarURL: 'https://cdn.discordapp.com/avatars/1115950950759268405/10b1cb81ea0a8b59ad9c612400dce38b.webp?size=1024',
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send a message: ', error);
	}
});

client.login(token);