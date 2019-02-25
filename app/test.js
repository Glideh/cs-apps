const Finder = require('./finder');

const myGardians = [
    'knight_claudia',
    'knight_dia',
    'queen_jorm',
    'queen_lirina',
    'king_dia',
    'king_bergis',
    'rook_indra',
    'rook_fritz',
    'rook_tahn',
    'bishop_fritz',
    'bishop_krishna',
    'bishop_jorm',
];

let teams = [];
for (let i = 0; i < 50; i++) {
    let team = Finder.findTeam(myGardians);
    if (Finder.teamIsValid(team, teams)) {
        teams.push(team);
    }
}

for (let x in teams) {
    console.log(Finder.showTeam(teams[x]));
}

// let gardians = Finder.implementedGardians;
// let team = {
//     knight: gardians.knight_claudia,
//     queen: gardians.queen_lirina,
//     king: gardians.king_dia,
//     rook: gardians.rook_fritz,
//     bishop: gardians.bishop_krishna,
// };
// console.log(Finder.teamIsFit(team));
