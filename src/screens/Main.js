import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, TextInput, Button, Alert } from 'react-native';
import React from 'react'
import mainStyles from '../styles/mainStyles';
import ButtonLogin from '../components/ButtonLogin';
import ButtonRegister from '../components/ButtonRegister';
import ForgotPassword from '../components/ForgotPassword';
import Overlay from '../components/Overlay';

export default function Main({navigation}){
    return (
      <View style={mainStyles.container}>
        {/* Contenedor superior con imagen de fondo */}
        <View style={mainStyles.topSection}>
          <ImageBackground 
            source={require('../../assets/images/background.jpg')} 
            style={mainStyles.background}
          >
            {/* Capa verde semitransparente */}
            <Overlay />
  
            {/* Logo */}
            <Image
              source={require('../../assets/images/logo.png')} 
              style={mainStyles.logo} 
              resizeMode="contain"
            />
          </ImageBackground>
        </View>
  
        {/* Sección blanca inferior */}
        <View style={mainStyles.bottomWhiteSection} />
  
        {/* Contenedor de botones y enlace */}
        <View style={mainStyles.buttonsContainer}>
          
          <ButtonLogin 
            stack='Auth'
            targetScreen='Login'
          />

          <ButtonRegister/>
  
          <ForgotPassword/>
          
        </View>
      </View>
    )
}
