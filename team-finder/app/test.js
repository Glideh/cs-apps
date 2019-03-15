const Finder = require('./finder');
const Controller = require('./controller');

const myGardians = [
    'knight_claudia',
    'knight_dia',
    'knight_bergis',
    'queen_bergis',
    'queen_jorm',
    'queen_lirina',
    'queen_fritz',
    'king_dia',
    'king_bergis',
    'king_fritz',
    'rook_fritz',
    'rook_haba',
    'rook_indra',
    'rook_tahn',
    'bishop_fritz',
    'bishop_krishna',
    'bishop_jorm',
];


function testFindTeam()
{
    let teams = [];
    for (let i = 0; i < 100; i++) {
        let team = Finder.findTeam(myGardians);
        if (Finder.teamIsValid(team, teams)) {
            teams.push(team);
        }
    }

    teams.sort((teama, teamb) => {
        let scorea = Finder.teamPower(teama);
        let scoreb = Finder.teamPower(teamb);
        if (scorea > scoreb) return -1;
        if (scorea < scoreb) return 1;
        return 0;
    });

    for (let x in teams) {
        console.log(Finder.showTeam(teams[x]), Finder.teamPower(teams[x]));
    }
}


function testTeamIsFit()
{
    let gardians = Finder.implementedGardians;
    let team = {
        knight: gardians.knight_claudia,
        queen: gardians.queen_fritz,
        king: gardians.king_dia,
        rook: gardians.rook_indra,
        bishop: gardians.bishop_jorm,
    };
    console.log(Finder.teamIsFit(team));
}


function testController()
{
    let client = {
        user: {tag: 42},
        // emojis: [{name: 'test'}],
        testEnv: true
    };
    Controller.ready(client);

    let msg = {
        content: '!g gardians',
        channel: {send: function (message) {
            console.log('Channel message sent', message);
        }}
    }
    Controller.message(msg);

    msg.content = '!g find ' + myGardians.join(' ');
    Controller.message(msg);
}

// testTeamIsFit();
testFindTeam();
// testController();
