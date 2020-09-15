module.exports = {
	name: 'higher-order-functions',
	aliases: ['hofs', 'hof'],
	args: false,
	cooldown: 5,
	description: 'higher order functions',
	execute(message, args) {
		message.channel.send('In JS, functions are treated as first-class objects, SO\n' + 
													'functions can take one or more functions as arguments,\n' + 
													'OR return a function as its result! WHY CAN\'T JAVA?!?!');
	},
};
