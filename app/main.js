const Finder = require('./finder');

let teams = [];
// let teams = [{
//     knight: gardians.knight_claudia,
//     queen: gardians.queen_lirina,
//     king: gardians.king_dia,
//     rook: gardians.rook_fritz,
//     bishop: gardians.bishop_krishna,
// }];
for (let i = 0; i < 4; i++) {
    let team = Finder.findTeam(gardians);
    if (Finder.teamIsValid(team, teams)) {
        teams.push(team);
    }
}

for (let x in teams) {
    console.log(Finder.showTeam(teams[x]));
}
