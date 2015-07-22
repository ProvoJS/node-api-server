import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../../constants/AppConstants';

var AppActions = {
    fetchTrainers: function() {
        fetch('http://localhost:4000/api/trainers')
            .then(function(response) {
                return response.json();
            }).then(function(trainers) {
                AppDispatcher.handleAction({
                    actionType: appConstants.FETCH_TRAINERS,
                    data: trainers
                });
            }).catch(function(ex) {
                console.error('fetching or parsing failed', ex);
            });
    },
    fetchTrainerById: function(trainerId) {
        fetch(`http://localhost:4000/api/trainers/${trainerId}`)
            .then(function(response) {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            }).then(function(trainer) {
                AppDispatcher.handleAction({
                    actionType: appConstants.FETCH_TRAINER,
                    data: trainer
                });
            }).catch(function(ex) {
                console.error(`Failed to fetch trainer by ID: ${ex.status} ${ex.statusText}`);
            });
    },
    addTrainer: function(trainer) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_TRAINER,
            data: trainer
        });
    },
    fetchPokemon: function() {
        fetch('http://localhost:4000/api/pokemon')
            .then(function(response) {
                return response.json();
            }).then(function(pokemon) {
                AppDispatcher.handleAction({
                    actionType: appConstants.FETCH_POKEMON,
                    data: pokemon
                });
            }).catch(function(ex) {
                console.error('fetching or parsing failed', ex);
            });
    },
    fetchPokemonByTrainerId: function(trainerId) {
        fetch(`http://localhost:4000/api/trainers/${trainerId}/pokemon`)
            .then(function(response) {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            }).then(function(pokemon) {
                AppDispatcher.handleAction({
                    actionType: appConstants.FETCH_POKEMON_FOR_TRAINER,
                    data: pokemon
                });
            }).catch(function(ex) {
                console.error(`Failed to fetch pokemon for trainer: ${ex.status} ${ex.statusText}`);
            });
    },
    addPokemon: function(pokemon) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: pokemon
        });
    }
};

module.exports = AppActions;
