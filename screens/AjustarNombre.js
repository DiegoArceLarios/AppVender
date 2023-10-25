import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image, KeyboardAvoidingView} from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner"; 
import walle from "../config";


const bgImage0 = require("../assets/fondoApp1.png");
const bgImage1 = require("../assets/fondoApp2.png");
const bgImage2 = require("../assets/fondoApp3.png");

const estrella = require("../assets/estrellita.png")


var cambios;

export default class AjustarNombre extends Component{
    constructor(props){
      super(props);
      this.state={
        valor1: '',
        valor2: '',
        valor3: '',

      } 
    }
    
    enviar=async()=>{
      await walle.collection('Movimiento')
      .doc('Transacciones')
      .update({ // <===
        Ganancias : 0,
        Productos :{
          Producto1: 0,
          Producto2: 0,
          Producto3: 0,
        },
        Ganancias: 0,
        Utilidades: -581,
        reset: true,
    })
    }
    

    render(){
      const {valor1,valor2,valor3}=this.state; 

      return(
        <KeyboardAvoidingView style={styles.caja}>
          <ImageBackground source={bgImage2} style={styles.fondo}>
            <View style={styles.caja}>
              <Text style={[styles.texto, {fontSize:40}, {marginTop: 50}]}>
                Boton de reseteo
              </Text>
            </View>

            <View style={{alignItems:'center'}}>
              
              <TouchableOpacity style={[styles.boton,{backgroundColor:'orange',top: 20}]} onPress={this.enviar}>
                <Text style={styles.textoB}>
                  Resetear
                </Text>
              </TouchableOpacity>
              <Image source={estrella} style={styles.image}/>
              
            </View>
            
          </ImageBackground>
        </KeyboardAvoidingView>
          
      );

      }
    }


    const styles = StyleSheet.create({
      caja:{
        flex: 0.9,
        
      },
      boton:{
        width: 150,
        height: 100,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
              
      },     
      fondo:{
        flex: 1,
        height: 800,
        width: 360,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
      },
      image:{
        marginTop: 80,
        width: 200,
        height: 200,
      },
      texto:{
        fontWeight:'bold',
        color: 'white',        
      },
      boton:{
        width:100,
        height:70,
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 5,
        
        
      },
      inputs:{
        borderColor: 'white',
        borderWidth: 5,
        marginTop: 10,
        borderRadius: 20,
        width: 200,
        height: 50,
        fontSize: 15,
        color: 'white'
      },
      textoB:{
        fontSize: 20,
        fontWeight: 'bold',

      }
    })