//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
const Discord6 = require('discord.js');
const Discord7 = require('discord.js');
const Discord8 = require('discord.js');
const Discord9 = require('discord.js');
const Discord10 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
const client6 = new Discord6.Client();
const client7 = new Discord7.Client();
const client8 = new Discord8.Client();
const client9 = new Discord9.Client()
const client10 = new Discord10.Client()
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "515501341905256450"; 
var ChannelID = "515543913038086165";
var prefix = "W";
console.log('Bots. Is. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {  
    function timerFunc() {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client5.on('ready', () => {
    function timerFunc() {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client6.on('ready', () => {
    function timerFunc() {
        client6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client7.on('ready', () => {
    function timerFunc() {
        client7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client8.on('ready', () => {
    function timerFunc() {
        client8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client9.on('ready', () => {
    function timerFunc() {
        client9.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client10.on('ready', () => {
    function timerFunc() {
        client10.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '1say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '2say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '3say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '4say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '5say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '6say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '7say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '8say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '9say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '10say') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client9.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client10.on("message", message => {
    if (message.author.bot) return;
    if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
  if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
      let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
/////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
client1.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client2.on('ready', () => {
client2.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client3.on('ready', () => {
client3.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client4.on('ready', () => {
client4.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client5.on('ready', () => {
client5.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client6.on('ready', () => {
client6.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client7.on('ready', () => {
client7.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client8.on('ready', () => {
client8.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client9.on('ready', () => {
client9.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
client10.on('ready', () => {
client10.user.setActivity('Wee.', {type: "STREAMING",url: "http://www.twitch.tv/meercy"});
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client9.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
client10.on("message", message => {
    if (message.author.bot) return;
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
if(message.author.id !== "228139766573432832") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!228139766573432832>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
client3.login(process.env.BOT3_TOKEN);
client4.login(process.env.BOT4_TOKEN);
client5.login(process.env.BOT5_TOKEN);
client6.login(process.env.BOT6_TOKEN);
client7.login(process.env.BOT7_TOKEN);
client8.login(process.env.BOT8_TOKEN);
client9.login(process.env.BOT9_TOKEN);
client10.login(process.env.BOT10_TOKEN);
