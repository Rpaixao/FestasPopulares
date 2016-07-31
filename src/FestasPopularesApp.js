import React, { Component } from 'react';
import ReactNative, { View, Navigator } from 'react-native';


var FestaDetail = require('./components/festa');
var List = require('./components/festaslist');

var ROUTES = {
  list: List,
  festa: FestaDetail,
};

var FestasPopularesApp = React.createClass({
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render : function(){
    return(
      <Navigator
        initialRoute={{name: 'list'}}
        renderScene={this.renderScene}
        configureScene={(route) => { return Navigator.SceneConfigs.FloatFromBottomAndroid }}
      />

    );
  }
});

module.exports = FestasPopularesApp;
