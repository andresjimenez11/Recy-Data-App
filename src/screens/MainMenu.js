import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay.js';
import { handleRegisterRecycling, handleStatistics, handleSettings, handleAbout, handleRegisterRecyclingList} from '../components/MainMenuButtonHandlers.js';

export default function MainMenu({ navigation }) {
  return (
    <View style={MainMenuButtonStyles.container}>

      {/* Contenedor superior con imagen de fondo */}
      <View style={MainMenuButtonStyles.topSection}>
        <ImageBackground
          source={require('../../assets/images/background.jpg')}
          style={MainMenuButtonStyles.background}
        >
          {/* Capa verde semitransparente */}
          <Overlay />

          {/* Logo */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={MainMenuButtonStyles.logo}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>

      {/* Sección blanca inferior */}
      <View style={MainMenuButtonStyles.bottomWhiteSection} />

      {/* Botones en 2x2 */}
      <View style={MainMenuButtonStyles.buttonsContainer}>
        <TouchableOpacity 
          style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
          onPress={() => handleRegisterRecyclingList(navigation)}
          >
          <Text style={MainMenuButtonStyles.buttonText}>Registrar Reciclaje</Text>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
          onPress={() => handleStatistics(navigation)}
          >
          <Text style={MainMenuButtonStyles.buttonText}>Estadística</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
          onPress={() => handleSettings(navigation)}
          >
          <Text style={MainMenuButtonStyles.buttonText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
          onPress={() => handleAbout(navigation)}
          >
          <Text style={MainMenuButtonStyles.buttonText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
