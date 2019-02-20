const Discord = require('discord.js');
const Finder = require('./finder');
const auth = require('./auth.json');
const client = new Discord.Client();
const prefix = '!g ';

let directionEmojies;

function gardianToString(gardian, withId)
{
    withId = typeof withId !== 'undefined' ? withId : false;
    let gardianString = `${directionEmojies[gardian.direction]} ${gardian.name}`;
    return gardianString + (withId ? ` (${gardian.id})` : '');
}

function teamToString(team)
{
    let teamStrings = Object.keys(team).map(direction => {
        return gardianToString(team[direction]);
    });
    return teamStrings.join(', ');
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    directionEmojies = {
        knight: client.emojis.find(emoji => emoji.name === 'cava'),
        queen: client.emojis.find(emoji => emoji.name === 'reine'),
        king: client.emojis.find(emoji => emoji.name === 'roi'),
        rook: client.emojis.find(emoji => emoji.name === 'tour'),
        bishop: client.emojis.find(emoji => emoji.name === 'fou'),
    };
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) {
        return;
    }
    let args = msg.content.replace(prefix, '').split(' ');
    let command = args[0];
    if (command === 'gardians') {
        let gardians = Finder.getGardiansList();
        gardians = gardians.map(gardian => gardianToString(gardian, true));
        msg.channel.send(gardians);
    }
    if (command === 'find') {
        args.shift();
        console.log(`Searching teams for ${args.length} gardians`);
        let teams = [];
        for (let i = 0; i < 100; i++) {
            let team = Finder.findTeam(args);
            if (Finder.teamIsValid(team, teams)) {
                teams.push(team);
            }
        }
        console.log(`${teams.length} teams found`);
        if (teams.length === 0) {
            msg.channel.send('No team found, try again !');
        } else {
            msg.channel.send(teams.map(team => teamToString(team)));
        }
    }
});

client.login(auth.token);
