const { Events } = require('discord.js');
const { eventChannelId, rules } = require('./eventConfig.json');

module.exports = {
	name: Events.MessageReactionAdd,
	once: false,
	async execute(reaction) {
        //console.log(reaction._emoji)

        if(reaction.message.channelId == eventChannelId){
            	if(reaction._emoji.name != '👍'){
                	reaction.remove()
	                	.catch(error => console.error('Failed to remove reactions:', error));
			console.log("reaction removed")
            	}
        }

		if(reaction.message.channelId == rules){
        		reaction.remove()
	        		.catch(error => console.error('Failed to remove reactions:', error));
			console.log("reaction removed")
        	}
	},
};
