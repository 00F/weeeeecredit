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
    if(message.content.toLowerCase().split(' ')[0] == '1s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '2s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '3s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '4s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '5s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '6s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '7s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '8s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '9s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == '10s') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client2.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client3.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client4.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client5.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client6.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client7.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client8.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client9.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
client10.on('message', message => {
    if(message.author.id !== '228139766573432832') return;
    if(message.content.toLowerCase().split(' ')[0] == 'Wsay') {
        if(!message.content.toLowerCase().split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.toLowerCase().split(' ').slice(1).join(' '));
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client3.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client4.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client5.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client6.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client7.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client8.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client9.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
client10.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "228139766573432832") return message.reply(' ').then(msg => msg.delete(3000));
message.channel.send('#rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!286926707531841536>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.1);
client2.login(process.env.2);
client3.login(process.env.3);
client4.login(process.env.4);
client5.login(process.env.5);
client6.login(process.env.6);
client7.login(process.env.7);
client8.login(process.env.8);
client9.login(process.env.9);
client10.login(process.env.10);
