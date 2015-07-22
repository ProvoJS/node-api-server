/*** @jsx React.DOM */
import React from 'react';
import AppStore from '../../flux/stores/AppStore';
import AppActions from '../../flux/actions/AppActions';

import PokemonTable from '../../shared/PokemonTable';

var TrainerDetails = React.createClass({
    getInitialState: function() {
        return {
            trainer: AppStore.getCurrentTrainer(),
            pokemon: AppStore.getPokemonForCurrentTrainer()
        };
    },
    componentWillMount: function() {
        AppStore.clearCurrentTrainer();
        AppStore.clearPokemonForCurrentTrainer();
    },
    componentDidMount: function() {
        var trainerId = this.props.params.id;
        AppStore.addChangeListener(this._onChange);
        AppActions.fetchTrainerById(trainerId);
        AppActions.fetchPokemonByTrainerId(trainerId);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({
            trainer: AppStore.getCurrentTrainer(),
            pokemon: AppStore.getPokemonForCurrentTrainer()
        });
    },
    render: function() {
        var trainerRow;
        if (this.state.trainer !== null) {
            trainerRow = (
                <h2>{this.state.trainer.id} - {this.state.trainer.name}</h2>
            );
        } else {
            trainerRow = (
                <h2>No trainer data</h2>
            )
        }


        return(
            <div>
                <h1>Trainer Details</h1>
                {trainerRow}

                <PokemonTable pokemon={this.state.pokemon} />
            </div>
        );
    }
});

export default TrainerDetails;
