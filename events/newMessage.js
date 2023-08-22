const { Events } = require('discord.js');
const { artChannelId, eventChannelId } = require('./eventConfig.json');

module.exports = {
	name: Events.MessageCreate,
	once: false,
	async execute(message) {
        console.log(message.mentions.roles.get("1113550832798015609"))
        if(message.channelId == artChannelId){
            Promise.all([
                message.react('954380760419270667'),
                message.react('954380760557682769'),
            ])
                .catch(error => console.error('One of the emojis failed to react:', error));
        }
        if(message.channelId == eventChannelId && !message.system){
            Promise.all([
                //console.log("react"),
                message.react('👍')
            ])
                .catch(error => console.error('One of the emojis failed to react:', error));
        }
        
	},
};