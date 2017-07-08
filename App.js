import React, { Component } from 'react';
import { Text, View, Button, StyleSheet,TextInput,Picker } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker' ;

const Nav = ({goto, navigate, title }) => (
  <View style={styles.buttonStyle}>
    <Button title={''+title}
    onPress={() => navigate(goto)} />
  </View>
)


class WelcomeScreen extends Component {
  static navigationOptions = { title: "Welcome" };
  render() {
    return (
      <View style={styles.welcomeView}>
        <Text>Budgetpack is a bla bla bla ...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat scelerisque molestie. Sed lobortis enim et molestie volutpat. Pellentesque lobortis massa eget est viverra lobortis. Etiam gravida non ante vitae commodo. Fusce accumsan lectus eget accumsan molestie. Nulla sapien dui, mollis et eros quis, molestie cursus ex. Ut vitae lacinia elit. Curabitur porttitor orci eu massa pretium vulputate. Maecenas porta bibendum eros ac tempor. Curabitur aliquam pharetra vehicula. Suspendisse condimentum sem eros, quis ultricies mi interdum eu. Sed bibendum placerat nisi, interdum vehicula mauris maximus et.
        Nulla consequat scelerisque velit, eu mollis mauris. Nulla efficitur vel eros at imperdiet. Quisque ac varius purus. Vestibulum faucibus orci eget arcu sagittis, sollicitudin maximus tellus gravida. Vestibulum id ante libero. Nulla sed massa id nunc pretium imperdiet vel ac erat. Proin a elementum purus. Nam placerat felis orci, in fringilla sem pretium eu.
        Donec velit arcu, sodales et urna sit amet, placerat posuere massa. Quisque porta dictum ex, at consequat augue laoreet vitae. Aenean eleifend lacus quis arcu blandit, eget ultricies turpis convallis. Etiam nulla sem, blandit lacinia ex scelerisque, faucibus fermentum erat. Nam rutrum magna augue, et ullamcorper nibh accumsan id. Vivamus massa metus, ullamcorper in augue sit amet, efficitur euismod nunc. Sed in tincidunt ex. Mauris condimentum, quam quis semper volutpat, orci massa tristique lorem, sit amet porta metus ex non erat. Sed vitae facilisis nulla.</Text>

        <Nav title='NEXT' goto='Main' navigate={this.props.navigation.navigate} />
      </View>
      )
    }
}
class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {inputText: ''};
    this.state= {char: ''};
    this.state= {date:""};
    this.state= {date2:"" };
    this.state={currency:""};
  }
  static navigationOptions = { title: "Main" };
  render() {
    return (
      <View style={styles.mainView}>

        <View>
          <TextInput style={styles.mainInputStyle}
            placeholder="Please Enter Your Budget Here.."
            keyboardType= 'numeric'
            onChangeText={ (inputText)=> this.setState({inputText})} />
          <Picker
            selectedValue={this.state.currency}
            onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue})}>
            <Picker.Item label="Currency" value="none" />
            <Picker.Item label="Euro" value="eur"/>
            <Picker.Item label="Dolar" value="usd"/>
            <Picker.Item label="Turkish Lira" value="try"/>
          </Picker>
        </View>

          <View style={{paddingTop: 30}}>
            <Text>Pick the main characteristic of your holiday</Text>
            <Picker
              selectedValue={this.state.char}
              onValueChange={(itemValue, itemIndex) => this.setState({char: itemValue})}>
              <Picker.Item label="None" value="none" />
              <Picker.Item label="Nightlife" value="night" />
              <Picker.Item label="Cultural" value="cult" />
              <Picker.Item label="Relaxation" value="relax" />
            </Picker>
          </View>

          <Text style={{paddingTop: 30}}>Pick the starting and ending date </Text>
          <View style={{flexDirection: 'row', alignItems: 'stretch' }}>
            <DatePicker
              //style={{width: 200}}
                date={this.state.date}
                  mode="date"
                  placeholder="select starting date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2026-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
            />
            <DatePicker
              //style={{width: 200}}
                date={this.state.date2}
                  mode="date"
                  placeholder="select ending date"
                  format="YYYY-MM-DD"
                  minDate={this.state.date}
                  maxDate="2026-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={(date) => {this.setState({date2: date})}}
            />
          </View>
        <Nav title='FIND A PLAN' goto='Welcome' navigate={this.props.navigation.navigate} />

      </View>
    )
  }
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
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#ecf0f1',
  },
  welcomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  mainInputStyle: {
    height: 40,
    backgroundColor: '#ecf0f1',
  },
  mainView: {
    padding: 50,
    backgroundColor: '#ecf0f1',
    flex: 1,
  }
});
