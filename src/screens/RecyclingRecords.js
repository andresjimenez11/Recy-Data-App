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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); // Nueva fecha final
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false); // Controlador de la fecha final
  const [imageUri, setImageUri] = useState(null); // Para almacenar la URI de la imagen capturada
  const [location, setLocation] = useState(null);

  // Obtener el userId desde los parámetros
  const userId = route.params?.userId;
  console.log("User ID recibido desde route:", userId);

  const qrCodeData = route.params?.qrCodeData;
  console.log('DAtos QR recibidos: ', qrCodeData)

  // Establece la ubicación cuando la recibes del componente Location
  const handleLocationRetrieved = (location) => {
    setLocation(location);
    console.log(location);
  };

  const [state, setState] = useState({
    weight: "",
    peopleNum: "",
    recyclingType: 1,
    startDate: new Date().toLocaleDateString(), // Fecha inicial
    endDate: new Date().toLocaleDateString(), // Fecha final
    qrCodeData: "", // Inicializa con una cadena vacía
  });

  useEffect(() => {
    if(!state.userId && userId){
      setState((prevState) => ({...prevState, userId}));
    }

    if (!state.qrCodeData && qrCodeData) {
      setState((prevState) => ({ ...prevState, qrCodeData }));
      console.log("Datos de QR actualizados: ", qrCodeData);
    }
  }, [route.params?.userId, qrCodeData]);

  const handleChangeText = (inputT, value) => {
    setState({...state, [inputT]: value})
  };

  const handlePress = (index) => {
    console.log(`Botón de imagen ${index} presionado`);
    setState({
      weight: "",        // Limpiar el campo de peso
      peopleNum: "",     // Limpiar el campo de número de personas
      recyclingType: index, // Establecer el tipo de reciclaje
      startDate: new Date().toLocaleDateString(), // Restablecer la fecha inicial
      endDate: new Date().toLocaleDateString(), // Restablecer la fecha final
    });

    // Actualizar el contenido del botón con base en el índice
    setButtonContent(getButtonContent(index));
  };

  const openCamera = async () => {
    console.log("Navegando a la pantalla de la cámara...");
    navigation.navigate('Camera',{userId});
  };

  const onStartDateChange = (event, selectedDate) => {
    if (selectedDate){
      const formattedDate = selectedDate.toLocaleDateString();
      setStartDate(selectedDate);
      handleChangeText('startDate', formattedDate);
    }
    setShowStartDatePicker(false);
  };

  const onEndDateChange = (event, selectedDate) => {
    if (selectedDate){
      const formattedDate = selectedDate.toLocaleDateString();
      setEndDate(selectedDate);
      handleChangeText('endDate', formattedDate);
    }
    setShowEndDatePicker(false);
  };

  const saveNewRecycling = async() => {
    if (state.weight === "" || state.peopleNum === "" || state.qrCodeData === "") {
      alert('No pueden haber campos vacios');
    } else {
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
          startDate: state.startDate,
          endDate: state.endDate,
          qrCodeData: state.qrCodeData,
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
        
      } catch(error) {
        console.log("Error al guardar el registro: ", error);     
      }
    }
  };

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

              {/* Fecha inicial */}
              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>{strings.startDate}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput 
                    placeholder={strings.startDate}
                    style={[mainStyles.input, { flex: 1 }]}
                    editable={false}
                    value={state.startDate}
                  />
                  <TouchableOpacity 
                    onPress={() => setShowStartDatePicker(true)} 
                    style={[mainStyles.dateButton, { marginLeft: 10 }]}>
                    <Icon name='calendar' size={40} color="white"/>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Fecha final */}
              <View style={mainStyles.dateContainer}>
                <Text style={mainStyles.label}>{strings.endDate}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput 
                    placeholder={strings.endDate}
                    style={[mainStyles.input, { flex: 1 }]}
                    editable={false}
                    value={state.endDate}
                  />
                  <TouchableOpacity 
                    onPress={() => setShowEndDatePicker(true)} 
                    style={[mainStyles.dateButton, { marginLeft: 10 }]}>
                    <Icon name='calendar' size={40} color="white"/>
                  </TouchableOpacity>
                </View>
              </View>

              {showStartDatePicker && (
                <DateTimePicker
                  testID="startDateTimePicker"
                  value={startDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onStartDateChange}
                />
              )}

              {showEndDatePicker && (
                <DateTimePicker
                  testID="endDateTimePicker"
                  value={endDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onEndDateChange}
                />
              )}

              <View style={mainStyles.cameraContainer}>
                <Text style={mainStyles.label}>{strings.scanQR}</Text>
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
