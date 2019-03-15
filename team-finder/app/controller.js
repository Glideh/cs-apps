const Finder = require('./finder');

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
    let power = 'Note: ' + team.power;
    delete team.power;
    let teamStrings = Object.keys(team).map(key => {
        return gardianToString(team[key]);
    });
    teamStrings.unshift(power);
    return teamStrings.join(', ');
}


function initDirectionEmojies(client)
{
    let test = typeof client.testEnv !== 'undefined';
    const directions = {
        knight: 'cava',
        queen: 'reine',
        king: 'roi',
        rook: 'tour',
        bishop: 'fou',
    };
    for (direction in directions) {
        if (test) {
            directions[direction] = `:${direction}:`;
        } else {
            directions[direction] = client.emojis.find(emoji => emoji.name === directions[direction]);
        }
    }
    directionEmojies = directions;
}


function ready(client)
{
    console.log(`Logged in as ${client.user.tag}!`);
    initDirectionEmojies(client);
}


function find(args)
{
    console.log(`Searching teams for ${args.length} gardians`);
    let teams = [];
    for (let i = 0; i < 100; i++) {
        let team = Finder.findTeam(args);
        if (Finder.teamIsValid(team, teams)) {
            team.power = Finder.teamPower(team);
            teams.push(team);
        }
    }
    console.log(`${teams.length} teams found`);
    teams.sort((teama, teamb) => {
        if (teama.power > teamb.power) return -1;
        if (teama.power < teamb.power) return 1;
        return 0;
    });
    if (teams.length !== 0) {
        return teams.map(team => teamToString(team));
    }
    return 'No team found, try again !';
}


function gardians()
{
    let gardians = Finder.getGardiansList();
    gardians = gardians.map(gardian => gardianToString(gardian, true));
    return gardians;
}


function message(input)
{
    if (!input.content.startsWith(prefix)) {
        return;
    }
    let args = input.content
        .slice(prefix.length)
        .replace('\'', '')
        .split(/[\n ,]+/)
        .filter(w => w.length > 0)
    ;
    let command = args.shift();
    if (command === 'gardians') {
        let output = gardians();
        input.channel.send(output, {split: true});
    }
    if (command === 'find') {
        let output = find(args);
        input.channel.send(output, {split: true});
    }
}

module.exports = {
    ready,
    message,
    initDirectionEmojies
};
