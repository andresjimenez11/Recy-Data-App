import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const handleRegisterRecycling = (navigation) => {
    // Lógica para navegar a la pantalla de registro de reciclaje
    console.log("Botón Registro reciclaje")
    navigation.navigate('RecyclingRecords');
  };

  export const handleRegisterRecyclingList = (navigation) => {
    // Lógica para navegar a la pantalla de acerca de
    console.log("Lista de registros")
    navigation.navigate('RecyclingRecordsList');
  };
  
  
  export const handleStatistics = (navigation) => {
    // Lógica para navegar a la pantalla de estadísticas
    console.log("Botón Estadisticas")
    //navigation.navigate('Statistics');
    alert("Función aún no disponible")
  };
  
  export const handleSettings = (navigation) => {
    // Lógica para navegar a la pantalla de configuración
    console.log("Botón Configuración")
    alert("Función aún no disponible")
    //navigation.navigate('Settings');
  };
  
  export const handleAbout = (navigation) => {
    // Lógica para navegar a la pantalla de acerca de
    console.log("Botón Acerca de");
    navigation.navigate('AboutAs');
  };
  
  