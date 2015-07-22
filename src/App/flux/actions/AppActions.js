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
    fetchTrainerById: function() {

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
        //TODO: implement
        console.log('Fetching...');
    },
    addPokemon: function(pokemon) {
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: pokemon
        });
    }
};

module.exports = AppActions;
