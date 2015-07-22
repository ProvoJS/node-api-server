/*** @jsx React.DOM */
import React from 'react';
import AppStore from '../../flux/stores/AppStore';
import AppActions from '../../flux/actions/AppActions';

import TrainerTable from '../../shared/TrainerTable';
import PokemonTable from '../../shared/PokemonTable';

var Home = React.createClass({
    getInitialState: function() {
        return {
            trainers: AppStore.getTrainers(),
            pokemon: AppStore.getPokemon()
        };
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
        AppActions.fetchTrainers();
        AppActions.fetchPokemon();
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({
            trainers: AppStore.getTrainers(),
            pokemon: AppStore.getPokemon()
        });
    },
    render: function() {
        return (
            <div>
                <h2>Trainers:</h2>
                <TrainerTable trainers={this.state.trainers} />

                <h2>Pokemon:</h2>
                <PokemonTable pokemon={this.state.pokemon} />
            </div>
        );
    }
});

export default Home;
