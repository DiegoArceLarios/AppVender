import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image, KeyboardAvoidingView} from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner"; 
import walle from "../config";


const bgImage0 = require("../assets/fondoApp1.png");
const bgImage1 = require("../assets/fondoApp2.png");
const bgImage2 = require("../assets/fondoApp3.png");
const bgImage3 = require("../assets/fondoApp4.png");

const tamañoLetra1 = 15;
var cambios;

export default class AjustarPrecios extends Component{
    constructor(props){
      super(props);
      this.state={
        valor1: 0,
        valor2: 0,
        valor3: 0,        
      }
    }
    

    pasarABase=async()=>{
      const {valor1,valor2,valor3}=this.state;

      await walle.collection('Movimiento')
      .doc('Transacciones')
      .update({
        Precios:{
          Precio1: valor1,
          Precio2: valor2,
          Precio3: valor3
        }
      })
    }

    pasarABaseFake=async()=>{
      const {valor1,valor2,valor3}=this.state;
      
      await walle.collection('Movimiento')
      .doc('Transacciones')
      .update({ 
        Precios:{
          Precio1: valor1,
          Precio2: valor2,
          Precio3: valor3
        }
      })
    }

    render(){
      const {valor1,valor2,valor3}=this.state; 

      return(
        <KeyboardAvoidingView style={styles.caja}>
          <ImageBackground source={bgImage3} style={styles.fondo}>
            <View style={styles.caja}>
              <Text style={[styles.texto, {fontSize:40}, {marginTop: 50}]}>
                Precios
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={[styles.texto, {fontSize:20}]}>
                {valor1}
              </Text>
              <TouchableOpacity style={[styles.boton, {backgroundColor: 'green',}]} 
              onPress={()=>{this.setState({valor1:valor1+1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'green',}]}
              onPress={()=>{this.setState({valor1:valor1-1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={[styles.texto, {fontSize:20,marginTop:20}]}>
                {valor2}
              </Text>
              <TouchableOpacity style={[styles.boton, {backgroundColor: 'red'}]}
              onPress={()=>{this.setState({valor2:valor2+1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'red',}]}
              onPress={()=>{this.setState({valor2:valor2-1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={[styles.texto, {fontSize:20,marginTop:20}]}>
                {valor3}
              </Text>
              <TouchableOpacity style={[styles.boton, {backgroundColor: 'blue'}]}
              onPress={()=>{this.setState({valor3:valor3+1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'blue',}]}
              onPress={()=>{this.setState({valor3:valor3-1})
              this.pasarABase()}}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  -
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'gray',top:20}]}
              onPress={()=>this.pasarABaseFake()}>
                <Text style={[styles.texto, {fontSize:tamañoLetra1}]}>
                  Actualizar
                </Text>
              </TouchableOpacity>
            </View>
            
          </ImageBackground>
        </KeyboardAvoidingView>
          
      );

      }
    }


    const styles = StyleSheet.create({
      caja:{
        flex: 0.95,
        
      },
      
      fondo:{
        flex: 1,
        height: 800,
        width: 360,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      },
      imagen1:{
        width: 400,
        height: 800,
      },
      texto:{
        fontWeight:'bold',
        color: 'white',        
      },
      boton:{
        width:100,
        height:50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 5,
        
        
      }
    })