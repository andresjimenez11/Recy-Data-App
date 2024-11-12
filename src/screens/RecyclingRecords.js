import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para usar FontAwesome
import mainStyles from '../styles/mainStyles';
import ButtonRegisterRecycle from '../components/ButtonRegisterRecycle';
import Overlay from '../components/Overlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getButtonContent } from '../components/RecyclingRegisterButtonLogic';
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
    console.log("Navegando a la pantalla de la cámara...");
    navigation.navigate('Camera');
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

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

          <View style={mainStyles.additionalContainer}>
            <ScrollView style={{ width: 300 }}> 
              <View style={mainStyles.imageTextRow}>
                <Image 
                  source={buttonContent.imageSource} 
                  style={mainStyles.smallImage}
                />
                <Text style={mainStyles.longText}>
                  {buttonContent.text}
                </Text>
              </View>

              <Text style={mainStyles.label}>{strings.weightLabel}</Text>
              <TextInput 
                placeholder="Peso"
                style={mainStyles.input}
                keyboardType='decimal-pad'
              />

              <Text style={mainStyles.label}>{strings.peopleLabel}</Text>
              <TextInput 
                placeholder="Número de personas"
                style={mainStyles.input}
                keyboardType='numeric'
              />

              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>{strings.assignDate}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput 
                    placeholder="Asignar fecha"
                    style={[mainStyles.input, { flex: 1 }]}
                    editable={false}
                    value={date.toLocaleDateString()}
                  />
                  <TouchableOpacity onPress={() => setShowDatePicker(true)} style={[mainStyles.dateButton, { marginLeft: 10 }]}>
                    <Icon name='calendar' size={40} color="white"/>
                  </TouchableOpacity>
                </View>
              </View>

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

              <View style={mainStyles.cameraContainer}>
                <Text style={mainStyles.label}>{strings.photoLabel}</Text>
                <TouchableOpacity onPress={openCamera}>
                  <Image 
                    source={require('../../assets/images/Recurso 16.png')}
                    style={mainStyles.smallImage}
                  />
                </TouchableOpacity>
                {imageUri && (
                  <Image source={{ uri: imageUri }} style={mainStyles.capturedImage} />
                )}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>

      <View style={mainStyles.bottomWhiteSection}>
        <ButtonRegisterRecycle />
      </View>
    </View>
  );
}
