import { launchCamera } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';

export const getButtonContent = (index, setDate, date, setShowDatePicker) => {
  // Función para abrir la cámara
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("Captura de cámara cancelada");
      } else if (response.errorCode) {
        console.error("Error al abrir la cámara:", response.errorMessage);
      } else {
        console.log("Foto capturada:", response.assets[0].uri);
        // manejar la imagen capturada aquí
      }
    });
  };

  // Función para manejar el cambio de fecha
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Ocultar el DatePicker
    if (event.type === 'set') {
      setDate(selectedDate); // Establecer la fecha seleccionada
    }
  };

  // Componente del DateTimePicker
  const datePicker = (
    <DateTimePicker
      testID='dateTimePicker'
      value={date}
      mode='date'
      is24Hour={true}
      display='default'
      onChange={handleDateChange}
    />
  );

  switch (index) {
    case 1:
      return {
        imageSource: require('../../assets/images/Contenedores icons (2).png'),
        text: 'Residuos limpios y secos como: plástico, vidrio, metales, papel y cartón.',
        onPress: openCamera,
      };
    case 2:
      return {
        imageSource: require('../../assets/images/Contenedores icons (3).png'),
        text: 'Papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros; residuos COVID-19 como tapabocas, guantes, entre otros.',
        onPress: openCamera,
      };
    case 3:
      return {
        imageSource: require('../../assets/images/Contenedores icons (1).png'),
        text: 'Restos de comida, residuos de corte de césped y poda de jardín, etc.',
        onPress: openCamera,
      };
    case 4: // Añadir lógica para el botón de fecha
      return {
        imageSource: null,
        text: 'Seleccionar fecha',
        onPress: () => setShowDatePicker(true), // Mostrar el DatePicker
      };
    default:
      return {
        imageSource: null,
        text: '',
        onPress: () => console.log("Botón sin acción asignada"),
      };
  }
};

// Exportar el DatePicker como parte de la función si es necesario
export const getDatePicker = (showDatePicker, date, setShowDatePicker, setDate) => {
  return (
    showDatePicker && (
      <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode='date'
        is24Hour={true}
        display='default'
        onChange={(event, selectedDate) => handleDateChange(event, selectedDate, setShowDatePicker, setDate)}
      />
    )
  );
};

import { launchCamera } from 'react-native-image-picker';

export const getButtonContent = (index) => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("Captura de cámara cancelada");
      } else if (response.errorCode) {
        console.error("Error al abrir la cámara:", response.errorMessage);
      } else {
        console.log("Foto capturada:", response.assets[0].uri);
        // Puedes manejar la imagen capturada aquí
      }
    });
  };

  switch (index) {
    case 1:
      return {
        imageSource: require('../../assets/images/Contenedores icons (2).png'),
        text: 'Residuos limpios y secos como: plástico, vidrio, metales, papel y cartón.',
        onPress: openCamera,
      };
    case 2:
      return {
        imageSource: require('../../assets/images/Contenedores icons (3).png'),
        text: 'Papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros; residuos COVID-19 como tapabocas, guantes, entre otros.',
        onPress: openCamera,
      };
    case 3:
      return {
        imageSource: require('../../assets/images/Contenedores icons (1).png'),
        text: 'Restos de comida, residuos de corte de césped y poda de jardín, etc.',
        onPress: openCamera,
      };
    default:
      return {
        imageSource: null,
        text: '',
        onPress: () => console.log("Botón sin acción asignada"),
      };
  }
};
