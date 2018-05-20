import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import Foto from './compRobado.js'

export default class Calc2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      cuadro1: 4, 
      cuadro2: 0,
      cuadro3: 0,    
    };
  };
  cuadro1_cambia = (loqueescriben)=>{
    let num = parseInt(loqueescriben);
    if(isNaN(num)) {num = 0;}
    this.setState({cuadro1: num});
  }; 
  cuadro2_cambia = (loqueescriben)=>{
    let num = parseInt(loqueescriben);
    if(isNaN(num)) {num = 0;}
    this.setState({cuadro2: num});
  }; 

  presbut = (a, b) =>{
    a = this.state.cuadro1
    b = this.state.cuadro2
    let res = a + b;
    this.setState({cuadro3: res});
  };

  render() {
    return (
      <View style={{margin:50}}> 
      
        <Foto/>
        <TextInput 
          value={this.state.cuadro1.toString()}
          onChangeText={this.cuadro1_cambia}
       />      
        <TextInput 
          value={this.state.cuadro2.toString()}
          onChangeText={this.cuadro2_cambia}
        />

        <Button
          title="SUMAR"
          onPress={this.presbut}
         // onPress={this.suma(this.state.cuadro1,this.state.cuadro2).toString()}
        />
     
        <TextInput
          value={this.state.cuadro3.toString()}
        />
      </View>
    );
  }
} 

