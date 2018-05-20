import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cuadro1: 7, 
      cuadro2: 0,    
    };
  };

  suma = (a, b) =>{
    let res = a + b;
    console.warn(res);
    return res;
  } ;

  cuadro1_cambia = (loqueescriben)=>{
    let num = parseInt(loqueescriben);

    if(isNaN(num))
    {
      num = 0;
    }

    this.setState(
      {
        cuadro1: num
      }
    );
  }; 

  cuadro2_cambia = (loqueescriben)=>{
      {
        this.setState({cuadro2: parseInt(loqueescriben)});
      }     
    };

  render() {
    return (
      <View style={{margin:50}}> 

        <TextInput 
          value={this.state.cuadro1.toString()}
          onChangeText={this.cuadro1_cambia}
       />      

        <TextInput 
          value={this.state.cuadro2.toString()}
          onChangeText={this.cuadro2_cambia}
        />
        
        <TextInput 
          value={this.suma(this.state.cuadro1,this.state.cuadro2).toString()}
          />
      </View>
    );
  }
} 

