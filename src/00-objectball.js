function gameObject(){
    return {
    home: {
            'Team Name':"Brooklyn Nets",
            colors: "Black, White",
            players: {
               "Alan Anderson" : {number: "0",  shoe: "16" , points: "22", rebounds:"12", assists:"12", steal: "3",  blocks: "1",  slamDunks:"1"},
               "Reggie Evans"  : {number: "30", shoe: "14" , points: "12", rebounds:"12", assists:"12", steal: "12", blocks: "12", slamDunks:"7"},
               "Brook Lopez"  :  {number: "11", shoe: "17" , points: "17", rebounds:"19", assists:"10", steal: "3",  blocks: "1",  slamDunks:"15"},
               "Mason Plumlee" : {number: "1",  shoe: "19" , points: "26", rebounds:"12", assists:"6",  steal: "3",  blocks: "8",  slamDunks:"5"},
               "Jason Terry"   : {number: "31", shoe: "15" , points: "19", rebounds:"2",  assists:"2",  steal: "4",  blocks: "11", slamDunks:"1"},
            }
        },
    away: {
        'Team Name':"Charlotte Hornets",
        colors: "Turquoise, Purple",
        players: {
               "Jeff Adrien"        : {number: "4",  shoe: "18" , points: "10", rebounds:"1",  assists:"1",  steal: "2",  blocks: "7",  slamDunks:"2" },
               "Bismak Biyombo"     : {number: "0",  shoe: "16" , points: "12", rebounds:"4",  assists:"7",  steal: "7",  blocks: "15", slamDunks:"10"},
               "DeSagna Diop"       : {number: "2",  shoe: "14" , points: "24", rebounds:"12", assists:"12", steal: "4",  blocks: "5",  slamDunks:"5" },
               "Ben Gordon"         : {number: "8",  shoe: "15" , points: "33", rebounds:"3",  assists:"2",  steal: "1",  blocks: "1",  slamDunks:"0" },
               "Brendan Haywood"    : {number: "33", shoe: "15" , points: "6",  rebounds:"12", assists:"12", steal: "22", blocks: "5",  slamDunks:"12"},
            }
    }
}}

const game = gameObject();
const allPlayers = Object.assign({}, game.home.players, game.away.players);

function numPointsScored (playerName) {
    for (teamType in game) {
        if (game[teamType].players.hasOwnProperty(playerName)) {
            return game[teamType].players[playerName].points
        }
    }

   
}

function shoeSize(playerName) {
    return allPlayers[playerName].shoe;
}

function teamColors(teamName) {
    if (teamName === game.home['Team Name']){
        return game.home['colors'];
    } else if (teamName === game.away['Team Name']){
        return game.away['colors'];
    }else{return "Team Name is not logged"}
}

function teamNames(object) {
    const teams = [game.home['Team Name'], game.away['Team Name']];
    return teams;
}

function playerNumbers(teamName) {
    let players;
    if (teamName === game.home['Team Name']){
        players = game.home.players; 
    } else if (teamName === game.away['Team Name']){
        players = game.away.players; 
    } else {
        return "Team Name is not logged"
    }
    let numbers = [];

  

    for(player in players){
        numbers.push(players[player].number);
    }
    return numbers;
}

function playerStats(playersName){
    return allPlayers[playersName];
}

function bigShoeRebounds(){
    let largestShoe = 0;
    let playerWithLargestShoeSize;
    for(const player in allPlayers){
        if(allPlayers[player].shoe > largestShoe){
            largestShoe = allPlayers[player].shoe;
            playerWithLargestShoeSize = allPlayers[player];
        }
    }
    return playerWithLargestShoeSize.rebounds;
}




function getTeamTypes() {
    let teamTypes = [];
    for(const type in game){
        teamTypes.push(type);
    }
    return teamTypes;
}

function getWinningTeam() {
    let largestScore = 0;
    let winners;
    //go into each team type
    for(const type in game){
        let players = game[type].players
        let points = [];
        for(const player in players){
            points.push(parseInt(players[player].points));
        }
        let score = points.reduce((previousPoints, currentPoints) => {
            let totalPoints = previousPoints + currentPoints;
            return totalPoints;
        })
        if(score > largestScore){
            largestScore = score;
            winners = game[type]['Team Name'];
        }
    }
    
    return winners + ": " + largestScore;
}