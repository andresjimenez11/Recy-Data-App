import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para usar FontAwesome
import mainStyles from '../styles/mainStyles';
import ButtonRegisterRecycle from '../components/ButtonRegisterRecycle';
import Overlay from '../components/Overlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getButtonContent } from '../components/RecyclingRegisterButtonLogic';
import strings from '../util/strings';
import firebase from '../database/firebase';
import { Alert } from 'react-native';
import LocationComponent from '../components/LocationComponent';

export default function Main({ navigation, route }) {
  const [buttonContent, setButtonContent] = useState(getButtonContent(1));
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState(null); // Para almacenar la URI de la imagen capturada
  const [location, setLocation] = useState(null);

  // Obtener el userId desde los parámetros
  const userId = route.params?.userId;
  console.log("User ID recibido desde route:", userId);

  // Establece la ubicación cuando la recibes del componente Location
  const handleLocationRetrieved = (location) => {
    setLocation(location);
    console.log(location);
  };

  const [state, setState] = useState ({
    weight: "",
    peopleNum: "",
    recyclingType: 1,
    date: new Date().toLocaleDateString(),
  });
  
  useEffect(() => {
    if(route.params?.photoUri){
      setImageUri(route.params.photoUri);
    }

    if(!state.userId && userId){
      setState((prevState) => ({...prevState, userId}));
    }
  }, [route.params?.photoUri, userId]);

  const handleChangeText = (inputT, value) => {
    setState({...state, [inputT]: value})
  };

  const handlePress = (index) => {
    console.log(`Botón de imagen ${index} presionado`);
    setState({
      weight: "",        // Limpiar el campo de peso
      peopleNum: "",     // Limpiar el campo de número de personas
      recyclingType: index, // Establecer el tipo de reciclaje
      date: new Date().toLocaleDateString(), // Restablecer la fecha
    });

     // Actualizar el contenido del botón con base en el índice
    setButtonContent(getButtonContent(index));
  };

  const openCamera = async () => {
    console.log("Navegando a la pantalla de la cámara...");
    navigation.navigate('Camera',{userId});
  };

  const onDateChange = (event, selectedDate) => {
    if (selectedDate){
      const formattedDate = selectedDate.toLocaleDateString();
      setDate(selectedDate);
      handleChangeText('date', formattedDate);
    }
    setShowDatePicker(false);
  };

  const saveNewRecycling = async() => {
    if (state.weight === "" || state.peopleNum === "") {
      alert('No pueden haber campos vacios')
    }else{
      console.log(state);

      try{
        // Verifica si tienes una ubicación
        if (!location) {
          alert('Ubicación no disponible');
          return;
        }

        // Guardar datos en Firebase
        await firebase.db.collection('recyclingRecords').add({
          userId: state.userId,
          recyclingType: state.recyclingType,
          weight: state.weight,
          peopleNum: state.peopleNum,
          date: state.date,
          imageUri: imageUri,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        Alert.alert (
          'Información de almacenaje',
          strings.saved, 
          [
            {text: 'OK', onPress: () => navigation.navigate('RecyclingRecordsList',{userId})},
          ],
          {cancelable: false}
        );
        
      }catch(error){
        console.log("Error al guardar el registro: ", error);     

      }
    }
  }

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

           {/* Aquí usamos el LocationComponent */}
           <LocationComponent onLocationRetrieved={handleLocationRetrieved} />

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
                placeholder={strings.weight}
                style={mainStyles.input}
                keyboardType='decimal-pad'
                value={state.weight}
                onChangeText={(value) => handleChangeText('weight', value)}
              />

              <Text style={mainStyles.label}>{strings.peopleLabel}</Text>
              <TextInput 
                placeholder={strings.number_of_people}
                style={mainStyles.input}
                keyboardType='numeric'
                value={state.peopleNum}
                onChangeText={(value) => handleChangeText('peopleNum', value)}
              />

              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>{strings.assignDate}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput 
                    placeholder={strings.assignDate}
                    style={[mainStyles.input, { flex: 1 }]}
                    editable={false}
                    value={state.date}
                    //value={date.toLocaleDateString()}
                  />
                  <TouchableOpacity 
                    onPress={() => setShowDatePicker(true)} 
                    style={[mainStyles.dateButton, { marginLeft: 10 }]}
                  >
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
        <ButtonRegisterRecycle onPress={() => saveNewRecycling()} />
      </View>
    </View>
  );
}
