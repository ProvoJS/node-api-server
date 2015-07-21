/*** @jsx React.DOM */
import React from 'react';

var PokemonTable = React.createClass({
    getInitialState: function() {
        return {
            pokemon: [
                {
                    id: 1,
                    name: 'Pikachu',
                    level: 5
                },
                {
                    id: 1,
                    name: 'Charizard',
                    level: 20
                }
            ]
        };
    },
    render: function() {
        var rows = this.state.pokemon.map(function(p) {
            return (
                <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.level}</td>
                </tr>
            );
        });
        return (
            <table class="pokemon-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});

export default PokemonTable;
