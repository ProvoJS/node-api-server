/*** @jsx React.DOM */
import React from 'react';

var Home = React.createClass({

  render: function() {
    return(
      <div>
        <h1>This is the homepage</h1>
        <p><a href="#/trainers/3">Trainer 3</a></p>
      </div>
    );
  }
});

export default Home;
