import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const Nav = ({ screen, goto, navigate }) => (
  <View style={styles.container}>
    <Button title={'Go to ' + goto}
    onPress={() => navigate(goto)} />
  </View>
)


class WelcomeScreen extends Component {
  static navigationOptions = { title: "Welcome" };
  render() {
    return (
      <View style={styles.container}>
        <Text>Budgetpack is a bla bla bla ...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat scelerisque molestie. Sed lobortis enim et molestie volutpat. Pellentesque lobortis massa eget est viverra lobortis. Etiam gravida non ante vitae commodo. Fusce accumsan lectus eget accumsan molestie. Nulla sapien dui, mollis et eros quis, molestie cursus ex. Ut vitae lacinia elit. Curabitur porttitor orci eu massa pretium vulputate. Maecenas porta bibendum eros ac tempor. Curabitur aliquam pharetra vehicula. Suspendisse condimentum sem eros, quis ultricies mi interdum eu. Sed bibendum placerat nisi, interdum vehicula mauris maximus et.
        Nulla consequat scelerisque velit, eu mollis mauris. Nulla efficitur vel eros at imperdiet. Quisque ac varius purus. Vestibulum faucibus orci eget arcu sagittis, sollicitudin maximus tellus gravida. Vestibulum id ante libero. Nulla sed massa id nunc pretium imperdiet vel ac erat. Proin a elementum purus. Nam placerat felis orci, in fringilla sem pretium eu.

Donec velit arcu, sodales et urna sit amet, placerat posuere massa. Quisque porta dictum ex, at consequat augue laoreet vitae. Aenean eleifend lacus quis arcu blandit, eget ultricies turpis convallis. Etiam nulla sem, blandit lacinia ex scelerisque, faucibus fermentum erat. Nam rutrum magna augue, et ullamcorper nibh accumsan id. Vivamus massa metus, ullamcorper in augue sit amet, efficitur euismod nunc. Sed in tincidunt ex. Mauris condimentum, quam quis semper volutpat, orci massa tristique lorem, sit amet porta metus ex non erat. Sed vitae facilisis nulla.</Text>
        <Nav goto='Main' navigate={this.props.navigation.navigate} />
      </View>
      )
    }
}
class MainScreen extends Component {
  static navigationOptions = { title: "Main" };
  render() {
    return (<Nav screen='MainScreen' goto='Welcome' navigate={this.props.navigation.navigate} />) }
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

});
