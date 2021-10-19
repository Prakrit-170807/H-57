import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Funny Facts </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}> ◀ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 70 }}>
        </TouchableOpacity>
        <Text style={styles.points}> 1.                                                                     A crocodile cannot stick itstongue out.</Text>
        <TouchableOpacity style={{ marginBottom: 70 }}>
        </TouchableOpacity>
        <Text style={styles.points}> 2.                                                                   It is impossible for most peopleto lick their own elbow.</Text>
        

        <TouchableOpacity style={{ marginBottom: 700 }}>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100 
 },
 text:{
   color: '#73c991',
   backgroundColor: "#101010",
   marginTop: -50,
   paddingTop: 60,
   paddingLeft: 60,
   paddingBottom: 25, 
   fontSize: 25,
   fontWeight: 'bold',
   textAlign: 'left',
   width: 390,
 },
 points:{
   fontSize: 30,
   color:"white",
   textAlign: 'left',
   fontWeight: '500',
 },
   buttons: {
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 2,
   borderRadius: 10,
   borderColor: "#73c991",
   backgroundColor:"#101010",
   margin: 10,
   width: 50,
   height: 50,
   marginRight: 340,
   marginTop: -65,
 }
})