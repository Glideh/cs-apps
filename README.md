# Chain Strike GvG Team Finder

A node application allowing to find teams for Chain Strike GvG bosses with its Discord bot

## Bot usage

### Emojies

<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px">
<img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px">
<img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px">
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px">
<img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px">

These emojies need to be installed in the Discord server.  
The names of each one have to be configured in `controller.js` in the function `initDirectionEmojies()`

```javascript
const directions = {
    knight: `emoji_name_for_knight`,
    queen: `emoji_name_for_queen`,
    king: `emoji_name_for_king`,
    rook: `emoji_name_for_rook`,
    bishop: `emoji_name_for_bishop`,
};
```

### Listing the gardians implemented

    !g gardians

<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia (knight_claudia)  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Dia (knight_dia)  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Jorm (knight_jorm)  
<img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Bergis (queen_bergis)  
<img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Jorm (queen_jorm)  
<img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina (queen_lirina)  
<img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Fritz (queen_fritz)  
<img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia (king_dia)  
<img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Bergis (king_bergis)  
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Bergis (rook_bergis)  
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Fritz (rook_fritz)  
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Haba (rook_haba)  
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Indra (rook_indra)  
<img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Tahn (rook_tahn)  
<img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz (bishop_fritz)  
<img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Krishna (bishop_krishna)  
<img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Jorm (bishop_jorm)  
<img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Tahn (bishop_tahn)  

### Finding a team

This will find team combinations with the given gardians

    !g find <gardian1> <gardian2> <gardian3> ...

Example:

    !g find knight_claudia knight_dia queen_jorm queen_bergis queen_lirina queen_jorm king_dia king_bergis rook_bergis rook_fritz rook_haba rook_indra rook_tahn bishop_fritz bishop_krishna

<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Jorm, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Bergis, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Haba, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Jorm, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Bergis, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Tahn, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Jorm, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Bergis, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Indra, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Haba, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Krishna  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Haba, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Fritz, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Krishna  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Tahn, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Krishna  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Tahn, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz  
<img src="https://cdn.discordapp.com/emojis/469769877524054027.png?v=1" width="15px"> Claudia, <img src="https://cdn.discordapp.com/emojis/469769877658533889.png?v=1" width="15px"> Lirina, <img src="https://cdn.discordapp.com/emojis/469769877805334530.png?v=1" width="15px"> Dia, <img src="https://cdn.discordapp.com/emojis/469769878069444619.png?v=1" width="15px"> Indra, <img src="https://cdn.discordapp.com/emojis/469769877746483203.png?v=1" width="15px"> Fritz

## Server

[Docker](https://www.docker.com/) with [docker-compose](https://docs.docker.com/compose/) are required to run the service.

### Running the server

    docker-compose up -d

### Running the tests

    docker-compose run app npm test

## How it works

* It will try to build teams by randomly running through all the gardians 100 times
* For each gardian, it tries to place it in the current team being built
* The gardian is placed if
  * The direction slot is free
  * It is not already there (whatever the direction)
  * His skill is not already there
* Each generated team is then removed if
  * Is is duplicated
  * It is not complete (empty slots remaining)
* Teams are then sorted by "skill power" sum

### Skills

Implemented `skills.yml` there are only the skills useful in GvG

Each skill have a power from 1 to 5 that will define the final order of the proposed teams

DPS is considered as a skill but it's the only one that is accepted more than once in a team.

### Gardians

Implemented into `gardians.yml` listing all the implemented gardians
Each gardian have a set of skills that can be useful in GvG
