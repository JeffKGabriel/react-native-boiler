import React,{Component} from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import {connect} from 'react-redux'


//import LoginStatusMessage from './LoginStatusMessage';
//import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>
        MainScreen
      </Text>

      <Button
        onPress={() => this.props.navigation.dispatch({ type: 'Breezy' })}
        title="Breezy"
      />

      <Button
        onPress={() => this.props.navigation.dispatch({ type: 'Logout' })}
        title="Logout"
      />

      <Image
          source={require('../imgs/alinity.jpg')}
          style={{
            height:50,
            width:50,
            borderRadius:25,
          }}
        />

    </View>
    )

  }
}


MainScreen.navigationOptions = {
  title: 'Main Screen',
}



export default connect()(MainScreen)
