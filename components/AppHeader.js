import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Apprehention System</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#101010',
  },
  text:{
    color: '#fff',
    marginTop: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: 'rgba(0,255,0, .9)',
    shadowOffset: { height: 0, width: 0 }, 
    shadowOpacity: 100, 
    shadowRadius: 5,
  }
});

