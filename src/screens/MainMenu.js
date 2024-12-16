import React, {useEffect, useState} from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay.js';
import { handleStatistics, handleSettings, handleAbout, handleRegisterRecyclingList, handleLogout} from '../components/MainMenuButtonHandlers.js';
import strings from '../util/strings.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainMenu({ route, navigation }) {
  // Obtener el ID del usuario desde los parámetros de navegación
  const {userId } = route.params;
  const {wasteType} = route.params;

  // Mostrar el ID del usuario
  useEffect(() => {
    console.log('Id del ususario: ', userId);
    console.log('mainmenu generado recibido: ', wasteType);
  }, [userId,wasteType]);

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

          {/*Bot´n logout*/}
          <TouchableOpacity
            style={MainMenuButtonStyles.logoutButton}
            onPress={() => handleLogout(navigation)}
          >
            <Icon name='power-off' size={30} color={'white'}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Sección blanca inferior */}
      <View style={MainMenuButtonStyles.bottomWhiteSection} />

      {/* Botones en 2x2 */}
      <View style={MainMenuButtonStyles.buttonsContainer}>
        <View style={MainMenuButtonStyles.ButtonRow}>
          <TouchableOpacity 
            style={[MainMenuButtonStyles.buttonStyle, MainMenuButtonStyles.button]}
            onPress={() => handleRegisterRecyclingList(navigation, userId, wasteType)}            
            >
              <Icon name='recycle' size={40} color={"white"}></Icon>
              <Text style={MainMenuButtonStyles.buttonText}>{strings.registerRecycling}</Text>
          </TouchableOpacity> 

          <TouchableOpacity 
            style={[MainMenuButtonStyles.buttonStyle, MainMenuButtonStyles.button]}
            onPress={() => handleStatistics(navigation)}
            >
              <Icon name='line-chart' size={40} color={"white"}></Icon>
              <Text style={MainMenuButtonStyles.buttonText}>{strings.statistics}</Text>
          </TouchableOpacity>
        </View>
          <View style={MainMenuButtonStyles.ButtonRow}>
          <TouchableOpacity 
            style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
            onPress={() => handleSettings(navigation)}
            >
              <Icon name='cog' size={40} color={"white"}></Icon>
              <Text style={MainMenuButtonStyles.buttonText}>{strings.settings}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
            onPress={() => handleAbout(navigation)}
            >
              <Icon name='info-circle' size={40} color={"white"}></Icon>     
              <Text style={MainMenuButtonStyles.buttonText}>{strings.about}</Text>
          </TouchableOpacity>    
        </View>
      </View>
    </View>
  );
}
