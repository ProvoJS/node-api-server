/*** @jsx React.DOM */
import React from 'react';

var TrainerTable = React.createClass({
    render: function() {
        var trainerRows = this.props.trainers.map(function(trainer) {
            var trainerLink = `#/trainers/${trainer.id}`;
            return (
                <tr key={trainer.id}>
                    <td>{trainer.id}</td>
                    <td>
                        <a href={trainerLink}>{trainer.name}</a>
                    </td>
                </tr>
            );
        });
        return (
            <table className="trainer-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {trainerRows}
                </tbody>
            </table>
        );
    }
});

export default TrainerTable;
