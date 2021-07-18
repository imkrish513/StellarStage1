import React, { Component} from  'react';
import {Text, View, TouchableOpactiy,Button,StyleSheet} from 'react-native'

export default class StarMapScreen extends Component {
  render(){
    return(
      <View 
      style = {{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'blue'
      }}>
      <Text style = {styles.text}> Star Map Screen</Text>
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