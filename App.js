import React,{Component} from 'react';
import * as Font from "expo-font";
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';

import Boton_de_cambio from './components/Boton_de_cambio.js';


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      fontLoaded: false
    }
  }

  async loadFonts(){
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({fontLoaded: true});
  }

  componentDidMount(){
    this.loadFonts();
  }
  render(){
    const {fontLoaded} = this.state;
    if (fontLoaded) {
      return (<Boton_de_cambio/>);
    }
    return null;
  }
}

