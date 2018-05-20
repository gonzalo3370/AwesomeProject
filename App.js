import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
//import { isNumber } from 'util';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cuadro1: 9, 
      cuadro2: 0,    
    };
  }

  cuadro1_cambia = (loqueescriben)=>{
    if(isNaN(loqueescriben))
    {
      this.setState({cuadro1: loqueescriben});
    }    
  };

  render() {
    return (
      <View style={{margin:50}}> 

        <TextInput 
          value={this.state.cuadro1.toString()}
          onChangeText={this.cuadro1_cambia}
       />      

        <TextInput value={this.state.cuadro2.toString()}/>
      </View>
    );
  }
} 