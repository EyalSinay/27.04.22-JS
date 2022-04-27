/*
You are given a function, Pokemon, that takes three parameters,
pokemonName, pokemonType, an array of different pokemon attack methods,
pokemonAttackList.
1. Create three instances of the Pokemon and save them in a variable.
2. Using prototype properties, add the following methods:
• A method called callPokemon that will print the following: “I choose
you, <pokemon name>
• A method called attack that takes one parameter, an attack number,
that will print the specific attack method from the pokemonAttackList
array as the following: “<pokemon name> used <attack method>”
Call each pokemon with the 2 methods you created.
*/

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const bulbasaur = new Pokemon('Bulbasaur', 'Grass', ['Seed Bomb', 'Sludge Bomb', 'Power Whip']);
const squirtle = new Pokemon('Squirtle', 'Water', ['Aqua Jet', 'Aqua Tail', 'Water Pulse']);
const charmander = new Pokemon('Charmander', 'Fire', ['Flamethrower', 'Flame Charge', 'Flame Burst']);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function (attackNum) {
    if (attackNum < this.attackList.length) {
        console.log(`${this.name} used ${this.attackList[attackNum]}`);
    }
    else {
        console.log(`${this.name} has only ${this.attackList.length} attacks`);
    }
}

bulbasaur.callPokemon();
squirtle.callPokemon();
charmander.callPokemon();
bulbasaur.attack(0);
squirtle.attack(1);
charmander.attack(2);