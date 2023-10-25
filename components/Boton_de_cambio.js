import React,{Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Transacciones from "../screens/Transacciones";
import Datos from "../screens/Datos";
import AjustarNombre from "../screens/AjustarNombre"
import AjustarPrecios from "../screens/AjustarPrecios"

const Tab = createBottomTabNavigator();

export default class Boton_de_cambio extends Component{
    render(){
        return(
            <NavigationContainer >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          
              
                          // You can return any component that you like here!
                          
                        },
                        tabBarActiveTintColor: '#000000',
                        tabBarInactiveTintColor: '#FFFFFF',
                        tabBarLabelStyle: {
                            fontSize: 15,
                            fontFamily: "Rajdhani_600SemiBold",
                            marginBottom: 20,
                        },
                        
                        tabBarItemStyle: {
                            marginTop: 25,
                            marginBottom: 25,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 20,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#2D508F"
                        },
                        tabBarStyle: {
                            height: 120, 
                            backgroundColor: "#1A2E52"   
                        },
                        headerShown: false
                      })}
                      
                    >
                    <Tab.Screen name = "Cobrar" component={Transacciones}/>
                    <Tab.Screen name = "Registro" component={Datos}/>
                    <Tab.Screen name = "Reset" component={AjustarNombre}/> 
                    <Tab.Screen name = "Precio" component={AjustarPrecios}/>   
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}