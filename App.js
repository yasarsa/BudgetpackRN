import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const Hello = ({ screen, goto, navigate }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Hello {screen}</Text>
    <Button title={'Go to ' + goto}
    onPress={() => navigate(goto)} />
  </View>
)

class WelcomeScreen extends Component {
  static navigationOptions = { title: "Welcome" };
  render() {
    return (
      <Hello goto='Main' navigate={this.props.navigation.navigate} />)
    }
}
class MainScreen extends Component {
  static navigationOptions = { title: "Main" };
  render() {
    return (<Hello screen='MainScreen' goto='Welcome' navigate={this.props.navigation.navigate} />) }
}

export const StackHome = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
}, {headerMode: 'screen'});



export default class App extends Component {
  render() {
    return (
      <StackHome />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
