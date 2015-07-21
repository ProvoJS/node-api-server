/**
 * This is a simple in-memory database that pretends to be MySQL.
 *
 * Some of the functions have already been implemented, but you will need to
 * implement the other functions in order to get the app to work.
 */

var trainers = [
    {
        id: 1,
        name: 'Ash'
    },
    {
        id: 2,
        name: 'Misty'
    },
    {
        id: 3,
        name: 'Brock'
    }
];

var pokemon = [
    {
        id: 1,
        trainerId: 1,
        name: 'Pikachu',
        level: 35,
    },
    {
        id: 2,
        trainerId: 1,
        name: 'Charizard',
        level: 40
    },
    {
        id: 3,
        trainerId: 2,
        name: 'Staryu',
        level: 20
    },
    {
        id: 4,
        trainerId: 2,
        name: 'Horsea',
        level: 22
    },
    {
        id: 5,
        trainerId: 3,
        name: 'Onyx',
        level: 15
    },
    {
        id: 6,
        trainerId: 3,
        name: 'Geodude',
        level: 13
    }
];

function _getNextId(rows) {
    return rows.reduce(function(max, p) {
        if (p.id >= max) {
            max = p.id + 1;
        }
        return max;
    }, 1);
};

var db = {

    getAllTrainers: function() {
        return trainers;
    },

    getTrainerById: function(trainerId) {
        return null;
        /**
         * TODO: implement this function
         * Bonus points if you use the higher-order function `trainers.reduce`!
         */
    },

    addTrainer: function(name) {
        if (typeof name !== 'string') {
            throw new Error('invalid parameters');
        }

        var newTrainer = {
            id: _getNextId(trainers),
            name: name
        };
    },

    getAllPokemon: function() {
        return pokemon;
    },

    getPokemonById: function(pokemonId) {
        return null;
        /**
         * TODO: implement this function
         * Bonus points if you use the higher-order function `pokemon.reduce`!
         */
    },

    getPokemonByTrainerId: function(trainerId) {
        return [];
        /**
         * TODO: implement this function
         * Bonus points if you use the higher-order function `pokemon.filter`!
         */
    },

    addPokemon: function(trainerId, name, level) {
        if (typeof trainerId !== 'number'
            || typeof name !== 'string'
            || typeof level !== 'number') {
            throw new Error('invalid parameters');
        }

        var newPokemon = {
            id: _getNextId(pokemon),
            trainerId: trainerId,
            name: name,
            level: level
        };
        pokemon.push(newPokemon);
    }

};

module.exports = db;
