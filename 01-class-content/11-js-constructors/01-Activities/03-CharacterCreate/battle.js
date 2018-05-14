const krogan = {
    name: "Rex",
    profession: "warrior",
    gender: "male",
    age: 420,
    strength: 5,
    hitPoints: 100,
    printStats: function(){
        console.log(krogan)
    }
}

const turian = {
    name: "Garrus",
    profession: "soldier",
    gender: "male",
    age: 38,
    strength: 7,
    hitPoints: 70,
    printStats: function(){
        console.log(turian)
    }
}

const asari = {
    name: "Lana",
    profession: "wizard",
    gender: "female",
    age: 690,
    strength: 9,
    hitPoints: 40,
    printStats: function(){
        console.log(asari)
    }
}

function isAlive(character){
    character = process.argv[2];
    if (this.hitPoints > 0){
        return true;
    } else {return false};
    if (true) {console.log(character+" is Still kicking it.")}
    else {console.log(character+" is dead, bro.")}
}

function attack(firstChar, secondChar){
    if (process.argv[2]==="attack"){
        var firstChar = process.argv[3];
        var secondChar = process.argv[4];
        secondChar.hitPoints -= firstChar.strength;
        secondChar.printStats();
    }
}




// //////////////////////////////////////////////


function Character(
    name,
    profession,
    gender,
    age,
    strength,
    hp,
) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength= strength;
    this.hp = hp;
    this.printStats = function() {
        console.log('Name: '+ this.name);
        console.log('Profession: '+ this.profession);
        console.log('Gender: '+this.gender);
        console.log('Age: '+this.age);
        console.log('HP: '+this.hp);
    }
}

var asari = new Character(
    'Asari',
    'Wizard',
    'Female',
    690,
    40,
)


// asari.printStats()