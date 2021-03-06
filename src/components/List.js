'use strict';

var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{ "id": 1, "text": "ham" }, { "id": 2, "text": "cheese" }, { "id": 3, "text": "potatoes" }];

var List = React.createClass({
   displayName: 'List',

   render: function render() {
      var ListItems = ingredients.map(function (item) {
         return React.createElement(ListItem, { key: item.id, ingredient: item.text });
      });

      return React.createElement(
         'ul',
         null,
         ListItems
      );
   }
});

module.exports = List;