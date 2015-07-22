import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../../constants/AppConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var _store = {
    pokemon: [],
    trainers: []
};

var setTrainers = function(trainers) {
    _store.trainers = trainers;
};

var setPokemon = function(pokemon) {
    _store.pokemon = pokemon;
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
    getPokemon: function() {
        return _store.pokemon;
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case appConstants.FETCH_TRAINERS:
            setTrainers(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        case appConstants.FETCH_POKEMON:
            setPokemon(action.data);
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = AppStore;
