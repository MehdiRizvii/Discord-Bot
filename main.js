const Discord = require('discord.js');
const ms = require('ms');
const client = new Discord.Client();

const prefix = '!';



client.once('ready',()=> {
    console.log('REM is Online')
});


client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

switch (args[0]) {
    case 'ping':
        message.reply('pong');
        break;
    case 'clear':
        if (!args[1]) return message.reply('Error please define a second arg')
        message.channel.bulkDelete(args[1]);
        break;
    case 'reminder':
let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))
        let time = args [2];
let evento = args.splice(3,25).join(" ");
if(!time){
    return message.reply("You have not set a time!");
}
if(!person){
    return message.reply("You have not specified who I'm reminding");
}
message.channel.send(`${person.user} has set a reminder for: ${ms(ms(time))} for ${(evento)}`);

setTimeout(function () {
   message.channel.send(`${person.user} You have been reminded for: ${(evento)}`)

}, ms(time));

break;
}



});











client.login('NzYzNDYzMTM5ODQ0OTQ3OTg4.X34EdA.L-jWs0tZiiN8XMxnv1ULOJ11QMs');
