'use strict';

var React = require('react');
var ListItem = React.createClass({
   displayName: 'ListItem',

   render: function render() {
      return React.createElement(
         'li',
         null,
         React.createElement(
            'h4',
            null,
            this.props.ingredient
         )
      );
   }
});

module.exports = ListItem;