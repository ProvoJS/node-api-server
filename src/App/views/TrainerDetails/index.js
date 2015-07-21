/*** @jsx React.DOM */
import React from 'react';
import PokemonTable from '../../shared/PokemonTable';

var getTrainerById = function(trainerId, callback) {
    setTimeout(function() {
        var trainer = {
            id: 1,
            name: 'Ash'
        };
        callback(null, trainer);
    }, 500);
};

var TrainerDetails = React.createClass({
    getInitialState: function() {
        return {
            trainer: {
                id: 1,
                name: 'Ash'
            }
        };
    },
    componentDidMount: function() {
        var trainerId = this.props.params.id;
        console.log('trainer id:', trainerId);
        // getTrainerById(trainerId, function(err, trainer) {
        //     console.log('got!', trainer);
        // });
        // fetchMessage(id, function (err, message) {
        //     this.setState({ message: message });
        // })
    },
    render: function() {
        return(
            <div>
                <h1>Trainer Details</h1>
                <h2>{this.state.trainer.id} - {this.state.trainer.name}</h2>

                <PokemonTable />
            </div>
        );
    }
});

export default TrainerDetails;
