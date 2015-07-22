import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../../constants/AppConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var _store = {
    trainers: [],
    pokemon: [],
    currentTrainer: null,
    pokemonForCurrentTrainer: []
};

var setTrainers = function(trainers) {
    _store.trainers = trainers;
};

var setPokemon = function(pokemon) {
    _store.pokemon = pokemon;
};

var setCurrentTrainer = function(trainer) {
    _store.currentTrainer = trainer;
};

var setPokemonForCurrentTrainer = function(pokemon) {
    _store.pokemonForCurrentTrainer = pokemon;
};

var addTrainer = function(trainer) {
    _store.trainers.push(trainer);
};

var addPokemon = function(pokemon) {
    _store.pokemon.push(pokemon);
};

var AppStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },

    getTrainers: function() {
        return _store.trainers;
    },
    getCurrentTrainer: function() {
        return _store.currentTrainer;
    },
    clearCurrentTrainer: function() {
        _store.currentTrainer = null;
    },
    clearPokemonForCurrentTrainer: function() {
        _store.pokemonForCurrentTrainer = [];
    },
    getPokemon: function() {
        return _store.pokemon;
    },
    getPokemonForCurrentTrainer: function() {
        return _store.pokemonForCurrentTrainer;
    },

});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case appConstants.FETCH_TRAINERS:
            setTrainers(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        case appConstants.FETCH_TRAINER:
            setCurrentTrainer(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        case appConstants.FETCH_POKEMON:
            setPokemon(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        case appConstants.FETCH_POKEMON_FOR_TRAINER:
            setPokemonForCurrentTrainer(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = AppStore;
