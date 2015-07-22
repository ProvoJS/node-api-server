/*** @jsx React.DOM */
import React from 'react';

var PokemonTable = React.createClass({
    render: function() {
        var rows = this.props.pokemon.map(function(pokemon) {
            return (
                <tr key={pokemon.id}>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.level}</td>
                </tr>
            );
        });
        return (
            <table className="pokemon-table">
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
