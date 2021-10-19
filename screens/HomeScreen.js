import { green } from 'ansi-colors';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Science')}>
              <Text style={styles.text}>Science Facts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Math')}>
              <Text style={styles.text}>Math facts </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Nature')}>
              <Text style={styles.text}>Nature Facts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Funny')}>
              <Text style={styles.text}>Funny Facts</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginBottom: 70000 }}>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 35,
    backgroundColor:"#1e1e1e",
    margin: 10,
    width: 380,
    height: 90,
    shadowColor:"rgba(0,250,0, .3)",
    shadowOffset: { height: 3, width: -3 }, shadowOpacity: 1, shadowRadius: 1,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  text:{
    fontSize:30, 
    color:"#73c991",
    marginLeft: 20,
    fontWeight: "400",
    
  }
});
