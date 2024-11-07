import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para usar FontAwesome
import mainStyles from '../styles/mainStyles';
import ButtonRegisterRecycle from '../components/ButtonRegisterRecycle';
import Overlay from '../components/Overlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getButtonContent } from '../components/RecyclingRegisterButtonLogic';
import { launchCamera } from 'react-native-image-picker';
import strings from '../util/strings';

export default function Main({ navigation }) {
  const [buttonContent, setButtonContent] = useState(getButtonContent(1));
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null); // Para almacenar la URI de la imagen capturada

  const handlePress = (index) => {
    console.log(`Botón de imagen ${index} presionado`);
    setButtonContent(getButtonContent(index));
  };

  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    try {
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log("Captura de cámara cancelada");
      } else if (response.errorCode) {
        console.error("Error al abrir la cámara:", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri); // Almacena la URI de la imagen
        console.log("Foto capturada:", response.assets[0].uri);
      }
    } catch (error) {
      console.error("Error al abrir la cámara:", error);
    }
  };

  // Función para manejar la selección de la fecha
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Cierra el DatePicker
    setDate(currentDate); // Actualiza la fecha
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

              {/* Campo de peso registrado */}
              <Text style={mainStyles.label}>{strings.weightLabel}</Text>
              <TextInput 
                placeholder="Peso"
                style={mainStyles.input}
                keyboardType='decimal-pad' // Permitir entrada de decimales
              />

              {/* Campo de número de personas */}
              <Text style={mainStyles.label}>{strings.peopleLabel}</Text>
              <TextInput 
                placeholder="Número de personas"
                style={mainStyles.input}
                keyboardType='numeric'  // Permitir solo números enteros
              />

              {/* Selector de fecha */}
              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>{strings.assignDate}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput 
                    placeholder="Asignar fecha"
                    style={[mainStyles.input, { flex: 1 }]} // Hacer que el TextInput ocupe el espacio disponible
                    editable={false} // Hacer que el TextInput no sea editable
                    value={date.toLocaleDateString()} // Mostrar la fecha formateada
                  />
                  <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[mainStyles.dateButton, { marginLeft: 10 }]}>
                    <Icon name='calendar' size={40} color="#fff"/>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Renderiza el DateTimePicker si showDatePicker es verdadero */}
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onDateChange}
                />
              )}

              {/* Botón para abrir la cámara */}
              <View style={mainStyles.weightImage}>
                <Text style={mainStyles.label}>{strings.photoLabel}</Text>
                <TouchableOpacity onPress={openCamera}>
                  <Image 
                    source={require('../../assets/images/Recurso 16.png')}
                    style={mainStyles.smallImage}
                  />
                </TouchableOpacity>
                {imageUri && ( // Mostrar la imagen capturada
                  <Image source={{ uri: imageUri }} style={mainStyles.capturedImage} />
                )}
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
