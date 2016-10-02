/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AlertIOS,
  TouchableHighlight,
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

  function getMoviesFromApiAsync() {
    return fetch('https://bluemixribbons.mybluemix.net/user/sgp715/password/Rochester7')
      .then((response) => response.json())
      .then((responseJson) => {
        AlertIOS.alert(responseJson.email);

        return responseJson.email;
      })
      .catch((error) => {
        console.error(error);
      });
  }


class ReactRibbons extends Component {
  
  render() {
  const routes = [
    {title: 'Sign In', index: 0},
    {title: 'Venmo', index: 1},
    {title: 'Supply', index: 2},
    {title: 'Rent', index: 3},
    {title: 'My Hammocks', index: 4},
  ];
  return (
    <Navigator
      initialRoute={routes[4]}
      initialRouteStack={routes}
      renderScene={(route, navigator) =><View>

        <TouchableHighlight onPress={() => {
          getMoviesFromApiAsync();
          if (route.index === 0) {
            navigator.push(routes[4]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight></View>
      }
      style={{padding: 100}}/>
  );
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#363636',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin:10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactRibbons', () => ReactRibbons);
