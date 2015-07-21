/*** @jsx React.DOM */
import React from 'react';
import { RouteHandler } from 'react-router';

var App = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <header>
                    <h1><a href="#/">Pokemon API Server</a></h1>
                </header>
                <div className="view">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

export default App;
