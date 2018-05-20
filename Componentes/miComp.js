import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Fruta from './compRobado.js'
export default class Resultado extends Component {
 suma = (a,b) => {
      return a + b;
      
 }
  render() {
    return (
<View>
        <Text>
        {this.suma(this.props.valor1,this.props.valor2)}
    </Text>
    <Fruta/>
</View>
    )  
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);

