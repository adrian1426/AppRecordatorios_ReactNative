import React from 'react';
import { View,Text} from 'react-native';
import * as Font from 'expo-font';
import Aplicacion from './src/index';

class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount (){

    await Font.loadAsync({
      'Inria Serif' : require('./assets/fonts/InriaSerif-Italic.ttf')
    });

    this.setState({fontLoaded: true});
  }

  render(){

    const {fontLoaded} = this.state;

    if(!fontLoaded){
      return <View><Text>Cargando...</Text></View>
    }

    return(<Aplicacion/>)
  }
}

export default App;
