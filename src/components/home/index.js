'use strict';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import React, {
  Component
} from 'react';

import ReactNative, {
  AppRegistry,
  Platform,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  PickerIOS
 } from 'react-native';

 import { Text } from 'native-base';

 import PickerAndroid from 'react-native-picker-android';

let Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;
let PickerItem = Picker.Item;

var Home = React.createClass({
  getInitialState: function() {
    return {
      language: '',
    };
  },

  onPressEvent(){
      this.props.navigator.push({name: 'list'});
  },

  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} source={require('./bg4.jpg')} />
            <View style={styles.header}>
                <Image style={styles.mark} source={require('./ptlogo.png')} />
            </View>
                <View style={styles.inputContainer}>
                    <Picker
                      itemStyle={{fontSize: 24, color: 'white'}}
                      style={styles.picker}
                      selectedValue={this.state.language}
                      onValueChange={(lang) => this.setState({language: lang})}>
                      <Picker.Item label="Selecione um Distrito" value="" />
                      <Picker.Item label="Setúbal" value="set" />
                      <Picker.Item label="Porto" value="por" />
                      <Picker.Item label="Lisboa" value="lis" />
                    </Picker>
                </View>
            <TouchableOpacity onPress={this.onPressEvent}>
              <View style={styles.signin}>
                  <Text style={styles.whiteFont}>PROCURAR</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.signup}>

            </View>
        </View>
    );
  }
});
var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#336B87',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold'
    },
    picker: {
      ...Platform.select({
        ios: {

        },
        android: {
          color:'white'
        },
      }),
    }
})
module.exports = Home;
