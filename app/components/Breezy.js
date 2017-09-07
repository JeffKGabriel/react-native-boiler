import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'

class Breezy extends Component{
  render(){
    return(
      <View>
        <Text>
          Breezy
        </Text>
      </View>
    )
  }
}

Breezy.navigationOptions = {
  title: 'BROHEEZY',
  //header: null,
};

export default connect()(Breezy)
