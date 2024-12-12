import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings from '../util/strings'
import { getAuth, signOut } from 'firebase/auth';

export const handleRegisterRecycling = (navigation, userId) => {
    // Lógica para navegar a la pantalla de registro de reciclaje
    console.log("Botón Registro reciclaje")
    navigation.navigate('RecyclingRecords', {userId});
  };

  export const handleRegisterRecyclingList = (navigation, userId) => {
    // Lógica para navegar a la pantalla de acerca de
    console.log("Lista de registros")
    navigation.navigate('RecyclingRecordsList', {userId}); // Pasar userId como parámetro
  };
  
  
  export const handleStatistics = (navigation) => {
    // Lógica para navegar a la pantalla de estadísticas
    console.log("Botón Estadisticas")
    navigation.navigate('Statistics');
    //alert("Función aún no disponible")
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

  export const handleLogout = (navigation) => {
    //Mostrar alerta de confirmación
    Alert.alert(
      strings.confirmLogoutTitle,
      strings.confirmLogoutMessage,
      [
        {
          text: strings.cancel,
          onPress: () => console.log(strings.cancelLogout),
          style: 'cancel'
        },
        {
          text: strings.confirm,
          onPress: () => {
            try{
              console.log(strings.LoggingOut);
              const auth = getAuth();
              signOut(auth).then(() => {
                console.log("Cerrando sesión correctamente");
                navigation.navigate('Main')
              }).catch((error) =>{
                console.log("Error durante el cierre de sesión", error)
              });              
            }catch(error){
              console.log("Error durante el cierre de sesión", error)
            }           
            
          }
        }
      ]
    )
  };
  
  