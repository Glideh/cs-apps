const yaml = require('js-yaml');
const fs = require('fs');

const skills = yaml.safeLoad(fs.readFileSync('./skills.yml', 'utf8'));


function skillAlreadyInTeam(gardian, team)
{
    let teamSkill = [];
    for (let x in team) {
        if (!team[x]) {
            continue;
        }
        for (let y in team[x].skills) {
            teamSkill.push(team[x].skills[y]);
        }
    }
    for (let y in gardian.skills) {
        if (gardian.skills[y] === 'dps') {
            continue;
        }
        if (teamSkill.indexOf(gardian.skills[y]) !== -1) {
            return true;
        }
    }
    return false;
}


function canFitIn(team, gardian)
{
    for (let direction in team) {
        // console.log(`Trying to fill the ${direction} slot`);
        if (!team[direction]) {
            // console.log('No one in this slot');
            continue;
        }
        if (gardian.direction === direction) {
            // console.log('Slot already filled');
            return false;
        }
        if (gardian.name === team[direction].name) {
            // console.log('Same gardian');
            return false;
        }
        if (skillAlreadyInTeam(gardian, team)) {
            // console.log('Skill already found in the team');
            return false;
        }
    }
    return true;
}


function shuffleObject(data)
{
    return Object.keys(data)
        .map((key) => ({key, value: data[key]}))
        .sort((a, b) => Math.round(Math.random()) === 1)
        .reduce((acc, e) => {
        acc[e.key] = e.value;
        return acc;
        }, {})
    ;
}


function findTeam(gardians)
{
    let team = {
        knight: null,
        queen: null,
        king: null,
        rook: null,
        bishop: null,
    };
    gardians = shuffleObject(gardians);
    for (let key in gardians) {
        let gardian = gardians[key];
        // console.log(`# Checking if ${gardian.direction} ${gardian.name} can find it's place`);
        if (canFitIn(team, gardian)) {
            team[gardian.direction] = gardian;
        }
    }
    return team;
}


function teamCRC(team)
{
    return Object.keys(team).map((direction) => (
        (direction + ' ' + (team[direction] ? team[direction].name : '')).padEnd(15)
    )).join(' | ');
}


function teamIsDouble(team, teams)
{
    return teams.map((t) => teamCRC(t)).indexOf(teamCRC(team)) !== -1;
}


function teamIsNotComplete(team)
{
    for (let x in team) {
        if (!team[x]) {
            return true;
        }
    }
    return false;
}


function teamIsValid(team, teams)
{
    if (teamIsDouble(team, teams)) {
        // console.log('Team already exists');
        return false;
    }
    if (teamIsNotComplete(team)) {
        // console.log('Team is not complete');
        return false;
    }
    console.log(teamCRC(team));
    return true;
}


let gardians = yaml.safeLoad(fs.readFileSync('./gardians.yml', 'utf8'));

let teams = [];
for (let i = 0; i < 20; i++) {
    let team = findTeam(gardians);
    if (teamIsValid(team, teams)) {
        teams.push(team);
    }
}
