/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import Button from 'react-native-button';

class ReactRibbons extends Component {
  render() {
    ]
    return (
        <Image source={require('./HammockTrees.jpg')} style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Bananahammock!
            </Text>
          <Button
            style={{fontSize: 20, color: '#eee8aa'}}
            styleDisabled={{color: '#ffffff'}}
            onPress={() => function(){ console.log('Sign-up')}}>
            Sign-up
          </Button>
         <Button
           style={{fontSize: 20, color: '#eee8aa'}}
           styleDisabled={{color: '#ffffff'}}
           onPress={() => function(){ console.log('Log-in')}}>
           Login
         </Button>
         
       </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  },
  welcome: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#eee8aa',
  },
});



AppRegistry.registerComponent('ReactRibbons', () => ReactRibbons);
