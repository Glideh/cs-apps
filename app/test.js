const Finder = require('./finder');

let teams = [];
for (let i = 0; i < 20; i++) {
    let team = Finder.findTeam();
    if (Finder.teamIsValid(team, teams)) {
        teams.push(team);
    }
}

for (let x in teams) {
    console.log(Finder.showTeam(teams[x]));
}
