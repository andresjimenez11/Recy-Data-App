import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles.js';
import Overlay from '../components/Overlay.js';
import strings from '../util/strings.js';

export default function AboutUs({ navigation }) {
  return (
    <View style={mainStyles.container}>
      {/* Contenedor superior con imagen de fondo */}
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

          {/* Mensaje de no elementos registrados */}
          <View style={mainStyles.buttonsContainer}>
            <Text style={mainStyles.label}>{strings.about}</Text>
          </View>

        </ImageBackground>
      </View>

    </View>
  );
}
