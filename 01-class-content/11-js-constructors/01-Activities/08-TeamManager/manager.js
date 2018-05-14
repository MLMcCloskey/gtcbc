var inquirer = require("inquirer");

var count = 0;

var flip = function(){
    return Math.round(Math.random())
} 

var roll = function(){
    return Math.round(Math.random * 20)
}

var team = []
var starters = team.slice(0, 2);
var subs = team.slice(3, 4);


flip();

function Player (
    name,
    position,
    offense,
    defense,
    goodGame,
    badGame,
    printStats,
) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    goodGame = function(){
        offense += flip();
        defense += flip();
    }
    badGame = function(){
        offense -= flip();
        defense -= flip();
    }
    // printStats = function(){
    //     console.log("Name: "+name+"/n Position: "+position+"/n Attack Rating: "+offense+"/n Defense Rating: "+defense)
    // }
}

Player.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nAttack Rating: " + this.offense + "\nDefense Rating: " + this.defense);
  };

var createPlayer = function(){
    if (count < 3){
        inquirer.prompt([
            {
                name: "name",
                message: "What is his name?",
            }, {
                name: "position",
                message: "What position does he play?",
            }, {
                name: "offense",
                message: "What is his offense rating? (1-9)",
            }, {
                name:"defense",
                message: "What is his defense rating?"
            }
        ]).then(function(answers){
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense
            );
            flip();
            if (flip() === 0) {
                newPlayer.offense--;
                newPlayer.defense--;
            } else {               
                newPlayer.offense++;
                newPlayer.defense++;
            }
            newPlayer.printStats();
            count++;
            createPlayer();
            team.push(newPlayer);
            // console.log(team);
            console.log(starters);
            console.log(subs);
        })
    }
}

createPlayer();


var playGame = function(){
    roll();

}