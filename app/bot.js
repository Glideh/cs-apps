const Discord = require('discord.js');
const Controller = require('./controller');
const auth = require('./auth.json');

const client = new Discord.Client();

client.on('ready', () => Controller.ready(client));
client.on('message', (msg) => Controller.message(msg));

client.login(auth.token);
