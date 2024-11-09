import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera'; // Correcta importación de expo-camera
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
  const [permission, setPermission] = useState(null); // Para almacenar el permiso de cámara
  const [cameraVisible, setCameraVisible] = useState(false);
  const cameraRef = useRef(null); // Crear una referencia para la cámara

  useEffect(() => {
    // Solicita permisos de cámara al cargar el componente, solo si el permiso aún no ha sido decidido
    const requestCameraPermission = async () => {
      console.log("Solicitud de permiso de cámara en proceso...");
      if (permission === null) {
        console.log("El permiso aún no ha sido decidido.");
        const { status } = await Camera.requestCameraPermissionsAsync();
        console.log("Estado del permiso recibido:", status);
        setPermission(status === 'granted'); // Establecer el estado del permiso
      } else {
        console.log("El permiso ya ha sido decidido previamente:", permission);
      }
    };

    requestCameraPermission(); // Asegura que el permiso se solicita cuando se monta el componente
  }, [permission]);

  const handlePress = (index) => {
    console.log(`Botón de imagen ${index} presionado`);
    setButtonContent(getButtonContent(index));
  };

  const openCamera = async () => {
    console.log("Intentando abrir la cámara...");
    if (permission === null) {
      // Si aún no hemos recibido una respuesta del permiso, lo solicitamos
      console.log("No se ha decidido el permiso, solicitándolo...");
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log("Estado del permiso recibido al intentar abrir la cámara:", status);
      setPermission(status === 'granted');
    }

    // Solo si el permiso fue concedido, mostramos la cámara
    if (permission === 'granted') {
      console.log("Permiso concedido, mostrando cámara...");
      setCameraVisible(true);
    } else {
      console.log("Permiso de cámara no concedido");
    }
  };

  const takePicture = async () => {
    try {
      console.log("Intentando tomar una foto...");
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Foto capturada:", photo.uri);  // Verifica que la URI de la foto es la esperada
        setImageUri(photo.uri); // Almacena la URI de la imagen
        setCameraVisible(false);
      } else {
        console.log("No se pudo acceder a la cámara");
      }
    } catch (error) {
      console.error("Error al tomar la foto:", error); // Manejo de errores si la captura falla
    }
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
                    <Icon name='calendar' size={40} color="#fff"/>
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

      {cameraVisible && permission === 'granted' && (
        <Camera
          ref={cameraRef} // Asignar la referencia aquí
          style={mainStyles.camera}
          type={Camera.Type.back} // Aseguramos que la cámara está configurada correctamente
          onCameraReady={() => console.log("Camera ready")}
        >
          <TouchableOpacity style={mainStyles.captureButton} onPress={takePicture}>
            <Text style={mainStyles.text}>Capturar</Text>
          </TouchableOpacity>
        </Camera>
      )}
    </View>
  );
}
