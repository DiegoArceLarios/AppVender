import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image,KeyboardAvoidingView} from "react-native";
import walle from "../config";


const fondo = require("../assets/fondoApp2.png")




export default class Datos extends Component{

    constructor(){
        super();
        this.state={
            valores: {},
            nombre1:'',
            nombre2:'',
            nombre3:'',
            numero1: 0,
            numero2: 0,
            numero3: 0,
            ganan: 0,
            util: 0,
            documento: '',
            util: 0,
            ganan: 0,
            hielo: 0,
        }
    }

    baseDeDatos= async ()=>{
        await walle.collection('Movimiento')
        .doc('Transacciones')        
        .get()
        .then(doc=>{
            this.setState({valores:doc.data()})
        })
        this.setState({nombre1:this.state.valores.Nombres.Nombre1});
        this.setState({nombre2:this.state.valores.Nombres.Nombre2});
        this.setState({nombre3:this.state.valores.Nombres.Nombre3});
        
        this.setState({numero1:this.state.valores.Productos.Producto1});
        this.setState({numero2:this.state.valores.Productos.Producto2});
        this.setState({numero3:this.state.valores.Productos.Producto3});

        this.setState({ganan:this.state.valores.Ganancias});
        this.setState({util:this.state.valores.Utilidades});
        

        
    }

    vendeHielo =async()=>{
        const {ganan,util,hielo}=this.state;
        await walle.collection('Movimiento')
        .doc('Transacciones')        
        .get()
        .then(doc=>{
            this.setState({util:doc.data().Utilidades,ganan:doc.data().Ganancias})
            walle.collection('Movimiento')
            .doc('Transacciones')
            .update({
                Ganancias: ganan+10,
                Utilidades: util+10
            })
        })


        
    }
        
    componentDidMount(){
        this.baseDeDatos()
    }


    render(){
        const {hielo,nombre1,nombre2,nombre3,numero1,numero2,numero3, ganan, util}=this.state
        return(
        <KeyboardAvoidingView style={styles.container}>      
            <ImageBackground source={fondo} style={styles.image}>        
            <View style={styles.contatiner2}>
                <Text style={styles.texto}>
                    Datos de venta
                </Text>           
            </View>
            
            <TouchableOpacity style ={styles.boton} onPress={()=>this.baseDeDatos()}>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>
                    Actualizar
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style ={[styles.botonT,{bottom:-50,right:100,borderColor:'green'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {nombre1} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:0,borderColor:'red'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {nombre2} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:50,left:100,borderColor:'blue'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {nombre3} 
                </Text>
            </TouchableOpacity>


            <TouchableOpacity style ={[styles.botonT,{bottom:0,right:100, borderColor:'green'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {numero1} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:50,borderColor:'red'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {numero2} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:100,left:100,borderColor:'blue'}]}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    {numero3} 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style ={[styles.botonT,{bottom:50,borderColor:'red',right:100}]}>
            <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    Ganancias
                </Text>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    ${ganan} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:100,left:100,borderColor:'blue'}]}>
            <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    Utilidades 
                </Text>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    ${util} 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={[styles.botonT,{bottom:50,left:0,borderColor:'black'}]} onPress={this.vendeHielo}>
                <Text style={{fontSize: 15, fontWeight:'bold', color:'black'}}>
                    Hielos $10
                </Text>
                
            </TouchableOpacity>
            
            
            
            
            </ImageBackground>
        </KeyboardAvoidingView>

        );
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    contatiner2:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex: 1,
        height: 800,
        width: 360,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        color: 'white',
        marginBottom: 100,
        flex: 10,
        fontWeight: 'bold',
        fontSize: 30,

    },
    boton:{
        width: 150,
        height: 50,
        backgroundColor: 'orange',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },
    botonT:{
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    valores:{
        color: 'white',
        marginBottom: 100,
        fontWeight: 'bold',
        fontSize: 20,
        


    },
})