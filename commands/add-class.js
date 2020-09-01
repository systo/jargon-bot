module.exports = {
	name: 'add-class',
	aliases: ['addclass', 'ac', 'add'],
	args: true,
	cooldown: 1,
	description: 'add class roles',
	execute(message, args) {

		let member = message.mentions.members.first() ? message.mentions.members.first() : message.member;

		// don't allow auto add of [dev, mod] channels. charAt is 1 NOT 0 for opening < of JSX
		for (let i=0; i<args.length; i++) {
			if (['dev', 'mod'].includes(args[i]) || args[i].charAt(1) == '@') {
				args.splice(i, 1);
			}
		}

		console.log(args);

		let role = message.guild.roles.cache.find(r => r.name === args[0].toUpperCase());

		member.roles.add(role).catch(console.error);
		message.reply(`${role} class role added for ya.`);

	},
};
