import React, { Component} from  'react';
import {Text, View, TouchableOpactiy,Button,StyleSheet} from 'react-native'

export default class HomeScreen extends Component {
  render(){
    return(
      <View 
      style = {{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'blue'
      }}>
      <Text style = {styles.text}> Home Screen </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({

text:{
  color:'white',
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold'
}

})