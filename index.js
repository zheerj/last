// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "?"

client.on('ready', () => {
    client.user.setActivity('Chat', {type: 'WATCHING'});
});

client.on('message', msg => {

if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}
});

client.login(process.env.TOKEN);
