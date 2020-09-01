module.exports = {
	name: 'on-braces',
	aliases: ['1tbs'],
	args: false,
	cooldown: 5,
	description: '1TBS to rule them all',
	execute(message, args) {
		message.channel.send('There is 1tbs:\nOne True Brace Style to rule them all,' + 
			'\nand in the darkness bind them!\nNo Stroustrup or Allman styles from this bot.');
	},
};
