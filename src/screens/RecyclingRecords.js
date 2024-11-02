import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import mainStyles from '../styles/mainStyles';
import ButtonRegisterRecycle from '../components/ButtonRegisterRecycle';
import Overlay from '../components/Overlay';
import { getButtonContent } from '../components/RecyclingRegisterButtonLogic';

export default function Main({ navigation }) {
  const [buttonContent, setButtonContent] = useState(getButtonContent(1));

  const handlePress = (index) => {
    console.log(`Botón de imagen ${index} presionado`);
    setButtonContent(getButtonContent(index));
  };

  return (
    <View style={mainStyles.container}>
      {/* Contenedor superior con imagen de fondo */}
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

          {/* Botones */}
          <View style={mainStyles.imagesRow}>
            <TouchableOpacity onPress={() => handlePress(1)}>
              <Image 
                source={require('../../assets/images/Iconos (1).png')} 
                style={mainStyles.imageStyle} 
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(2)}>
              <Image 
                source={require('../../assets/images/Iconos (3).png')} 
                style={mainStyles.imageStyle} 
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress(3)}>
              <Image 
                source={require('../../assets/images/Iconos (2).png')} 
                style={mainStyles.imageStyle} 
              />
            </TouchableOpacity>
          </View>

          {/* Contenedor adicional con imagen y texto */}
          <View style={mainStyles.additionalContainer}>
            <ScrollView>
              <View style={mainStyles.imageTextRow}>
                <Image 
                  source={buttonContent.imageSource} 
                  style={mainStyles.smallImage}
                />
                <Text style={mainStyles.longText}>
                  {buttonContent.text}
                </Text>
              </View>

              {/* Campos de entrada */}
              <Text style={mainStyles.label}>Peso registrado (kg)</Text>
              <TextInput 
                placeholder="Peso"
                style={mainStyles.input}
              />

              <Text style={mainStyles.label}>Personas en la fuente</Text>
              <TextInput 
                placeholder="Número de personas"
                style={mainStyles.input}
              />

              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>Fecha de almacenamiento inicial</Text>
                <TextInput 
                  placeholder="Asignar fecha"
                  style={mainStyles.input}
                />
              </View>

              {/* Botón para abrir la cámara */}
              <View style={mainStyles.weightImage}>
                <Text style={mainStyles.label}>Foto de peso</Text>
                <TouchableOpacity onPress={buttonContent.onPress}>
                  <Image 
                    source={require('../../assets/images/Recurso 16.png')}
                    style={mainStyles.smallImage}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>

      {/* Sección inferior con botón */}
      <View style={mainStyles.bottomWhiteSection}>
        <ButtonRegisterRecycle />
      </View>
    </View>
  );
}
