const { SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Мутить людину на певний вказаний час')
        .addUserOption(option =>
			option
				.setName('ціль')
				.setDescription('Учасник якого треба зам\'ютити')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('причина')
				.setDescription('Причина мута'))
        .addIntegerOption(option =>
            option
                .setName('час')
                .setDescription('Час муту'))
        .addStringOption(option =>
            option.setName('одиниці-виміру')
                .setDescription('Обери одиниці виміру')
                //.setRequired(true)
                .addChoices(
                    { name: 'Хвилини', value: 'm' },
					{ name: 'Години', value: 'h' },
					{ name: 'Дні', value: 'd' },
                )),
            
	async execute(interaction) {
    console.log("sho")
        const measurements = {
            m: 'хвилин',
            h: 'годин',
            d: 'днів',
        };
		const target = await interaction.options.getMember('ціль');
    const measurement = await interaction.options.getString('одиниці-виміру') ?? 'm';
		const reason = await interaction.options.getString('причина') ?? 'Причина не надана';
    const time = await interaction.options.getInteger('час') ?? 5;
    

		await interaction.reply(`Зам'ючено <@${target.id}> з причини "${reason}" на ${time} ${measurements[measurement]}`);

		switch(measurement) {
            case 'm':
              // code block
              await target.timeout(time*60_000,reason)
              break;
            case 'h':
              await target.timeout(time*3_600_000,reason)
              // code block
              break;
            case 'd':
              // code block
              await target.timeout(time*86_400_000,reason)
              break;
            default:
              // code block
    }
  }
}
