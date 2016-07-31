/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

let FestasPopularesApp = require('./src/FestasPopularesApp');

class FestasPopulares extends Component {
  render() {
    return (
      <FestasPopularesApp>
      </FestasPopularesApp>
    );
  }
}

AppRegistry.registerComponent('FestasPopulares', () => FestasPopulares);
