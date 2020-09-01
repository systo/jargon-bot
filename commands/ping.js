module.exports = {
  name: 'ping',
  cooldown: 5,
  args: false,
	description: 'Ping!',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Pong! with latency of ${timeTaken}ms.`);
	},
};
