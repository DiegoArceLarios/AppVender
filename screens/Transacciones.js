import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image, KeyboardAvoidingView} from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner"; 
import walle from "../config";


const bgImage0 = require("../assets/fondoApp1.png");
const bgImage1 = require("../assets/fondoApp2.png");
const bgImage2 = require("../assets/fondoApp3.png");
const bgImage3 = require("../assets/fondoApp4.png");


var cambios;
const wall= walle.collection('Movimiento')
.doc('Transacciones')
.get()

export default class Transacciones extends Component{
    constructor(props){
      super(props);
      this.state={
        ganancias: 0,

        precio1: 0,
        precio2: 0,
        precio3: 0,
        resta: 0,
        resta1: 0,

        valor1: 0,
        valor2: 0,
        valor3: 0,

        valor11: 0,
        valor22: 0,
        valor33: 0,

        valores:{},

        color: 'green'

      }
    }
    
    transaccion=async()=>{
      const {precio1,precio2,precio3,valor1,valor2,valor3,valor11,valor22,valor33,ganancias,color,resta,resta1}=this.state;

      
      
      await walle.collection('Movimiento')
        .doc('Transacciones')        
        .get()
        .then(doc=>{
            this.setState({valores:doc.data()})
            const {valores}=this.state;
            if (!valores.reset){
              this.setState({valor11:valor1+valor11,valor22:valor2+valor22,valor33:valor3+valor33
              ,ganancias:(precio1*valor1)+(precio2*valor2)+(precio3*valor3)+ganancias,resta1:resta});
            }else{
              this.setState({valor11:valor1,valor22:valor2,valor33:valor3
                ,ganancias:(precio1*valor1)+(precio2*valor2)+(precio3*valor3),resta1:resta});
                walle.collection('Movimiento')
                .doc('Transacciones')
                .update({ // <===
                    reset:false,
                  }
                )
            }
              this.setState({valor1:0,valor2:0,valor3:0,resta:0});
        
              walle.collection('Movimiento')
              .doc('Transacciones')
              .update({ // <===
                Ganancias : ganancias-(10*resta1),
                Utilidades: ganancias-((10*resta1)+581),
                Productos :{
                  Producto1: valor11,
                  Producto2: valor22,
                  Producto3: valor33,
                  
                }
              })
        })
        this.setState({precio1:this.state.valores.Precios.Precio1});
        this.setState({precio2:this.state.valores.Precios.Precio2});
        this.setState({precio3:this.state.valores.Precios.Precio3});

      if(color==='green'){
        this.setState({color:'red'})
      }else{
        this.setState({color:'green'})
      }
       
      
    }

    componentDidMount=()=>{
      this.transaccion
    }
    /*transaccion=()=>{
      const {precio1,precio2,precio3,valor1,valor2,valor3}=this.state;
      var dia=new Date;
      walle.collection('Movimiento')
      .add({  <===
        Ganancias : (precio1*valor1)+(precio2*valor2)+(precio3*valor3),
        Día : dia,
      })
      this.setState({valor1:0,valor2:0,valor3:0})
    }
    Este es un ejemplo de agragar en base de dato*/

    reset=()=>{
      this.setState({valor1:0,valor2:0,valor3:0,resta:0});
      walle.collection('Movimiento')
      .doc('Transacciones')
      .get()
    }

    render(){
      const {precio1,precio2,precio3,valor1,valor2,valor3,valor11,valor22,valor33,ganancias,color,resta}=this.state;

      return(
        <KeyboardAvoidingView style={styles.caja}>
          <ImageBackground source={bgImage0} style={styles.fondo}>
            <View style={styles.caja}>
              <Text style={[styles.texto, {fontSize:40}, {marginTop: 50}, {color: 'black'}]}>
                Transacciones
              </Text>
            </View>

            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={[styles.boton, {backgroundColor: 'green',}]}
              onPress={()=>this.setState({valor1:valor1+1})}>
                <Text style={[styles.texto, {fontSize:20}]}>
                  Mojitos ${precio1}
                </Text>
                <Text style={[styles.texto, {fontSize:20}]}>
                  {valor1}
                </Text>
                <Image source={require('../assets/limon.png')} style={[styles.imagenBoton,{left: 160,bottom:15}]}/>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'red',}]}
              onPress={()=>this.setState({valor2:valor2+1})}>
                <Text style={[styles.texto, {fontSize:20}]}>
                  Paloma ${precio2}
                </Text>
                <Text style={[styles.texto, {fontSize:20}]}>
                  {valor2}
                </Text>
                <Image source={require('../assets/toronja.png')} style={[styles.imagenBoton,{left: -20,bottom:15}]}/>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'blue',}]}
              onPress={()=>this.setState({valor3:valor3+1})}>
                <Text style={[styles.texto, {fontSize:20}]}>
                  Shirley Temple ${precio3}
                </Text>
                <Text style={[styles.texto, {fontSize:20}]}>
                  {valor3}
                </Text>
                <Image source={require('../assets/granada.png')} style={[styles.imagenBoton,{left: 160,bottom:-15}]}/>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.boton, {backgroundColor: 'black',}]}
              onPress={()=>this.setState({resta:resta+1})}>
                <Text style={[styles.texto, {fontSize:20}]}>
                  -$10
                </Text>
                <Text style={[styles.texto, {fontSize:20}]}>
                  {resta}
                </Text>
              
              </TouchableOpacity>

              <TouchableOpacity style={styles.boton1}
              onPress={this.reset}>
                <Text style={[styles.texto, {fontSize:20, color:'black'}]}>
                  R
                </Text>
                
              </TouchableOpacity>
              <TouchableOpacity style={[styles.boton2,{backgroundColor:color}]}
              onPress={()=> this.transaccion()}>
                <Text style={[styles.texto, {fontSize:20}]}>
                  Enviar
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
        flex: 0.9,
        
      },
      
      fondo:{
        flex: 1,
        resizeMode: "cover",
        height: 800,
        width: 360,
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
        width:200,
        height:70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 5,
        marginTop: 10,
        
        
      },
      boton1:{
        width:50,
        height:50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        marginTop: 10,

      },
      boton2:{
        width:200,
        height:50,
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        marginTop: 10,

      },
      imagenBoton:{
        width:60,
        height:60,
        marginTop: 10,
        position:'absolute',
        

      }
    })