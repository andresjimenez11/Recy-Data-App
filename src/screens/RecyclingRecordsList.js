import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from '../styles/mainStyles';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay';
import { handleRegisterRecycling } from '../components/MainMenuButtonHandlers.js';
import strings from '../util/strings.js';


export default function RecyclingList({ navigation }) {


  return (
    <View style={mainStyles.container}>
      {/* Contenedor superior con imagen de fondo */}
      <View style={mainStyles.container}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

          <View>
            <Text>
              Lista de reciclaje
            </Text>
      
          </View>

        </ImageBackground>
      </View>

      {/* Sección inferior con botón */}
      <View style={mainStyles.bottomWhiteSection}>
        <TouchableOpacity 
            style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
            onPress={() => handleRegisterRecycling(navigation)}
            >
            <Text style={MainMenuButtonStyles.buttonText}>{strings.registerRecycling}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




