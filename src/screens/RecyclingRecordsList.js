import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity  } from 'react-native';
import mainStyles from '../styles/mainStyles';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay';
import { handleRegisterRecycling } from '../components/MainMenuButtonHandlers.js';
import strings from '../util/strings.js';

export default function Main({ navigation }) {
  return (
    <View style={mainStyles.container}>
      {/* Contenedor superior con imagen de fondo */}
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

          {/* Aquí puedes agregar más etiquetas o botones si es necesario */}
          <Text style={mainStyles.label}>{strings.list}</Text>

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
