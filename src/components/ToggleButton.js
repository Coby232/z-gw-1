import React, { Component } from 'react';
import {  TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  toggleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.toggleCheck}>
        {this.state.isChecked ? (
          <AntDesign name="checksquareo" size={20} color="black" />
        ) : (
          <Feather name="square" size={20} color="black" />
        )}
      </TouchableOpacity>
    );
  }
}

export default ToggleButton;
