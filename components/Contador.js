import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Contador1 extends Component {

  state = {
    contador1: 0
  }

  incrementar() {
    this.setState({ contador1: this.state.contador1 + 1 })
  }
  decrementar() {
    this.setState({ contador1: this.state.contador1 - 1 })
  }

  render() {
    return (
      <View>
        <Text style={{color: 'white'}}> likes {this.state.contador1} 
          <Button title="+" onPress={() => this.incrementar()} />
          <Button title="-" onPress={() => this.decrementar()} />
        </Text>
      </View>
    )
  }
}


