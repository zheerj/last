// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"

client.on('ready', () => {
    client.user.setActivity('Chat', {type: 'WATCHING'});
});

client.on('message', msg => {

else if (command === 'avatar') {
    if (!message.mentions.users.size) {
        return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
    }

}
});

client.login(process.env.TOKEN);
