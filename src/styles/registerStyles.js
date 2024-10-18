import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const registerStyles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    container: {
      flex: 0.93,
      width: '100%',
      borderBottomLeftRadius: 70,
      borderBottomRightRadius: 70,
      overflow: 'hidden',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    scrollContainer: {
      flex: 1,
      marginTop: 95,
    },
    scrollView: {
      paddingHorizontal: 40,
      paddingBottom: 60,
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#000',
      padding: 10,
      marginVertical: 10,
      borderRadius: 10,
      fontSize: 16,
      fontFamily: 'Comfortaa'
    },
    additionalContainer: {
      flex: 0.07,
      backgroundColor: '#f8f8ff8',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    additionalText: {
      color: '#333',
      fontSize: 16,
    },
    buttonsContainer: {
      position: 'absolute',
      bottom: -30,
      left: 0,
      right: 0,
      alignItems: 'center',
      zIndex: 3,
    },
    containerForm: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    labelRightSelector: {
      width: '30%',
      color: '#ffffff',
      fontFamily: 'Comfortaa',
      fontSize: 16,
    },
    pickerContainer: {
      width: '70%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      marginVertical: 10,
      overflow: 'hidden',  // Asegura que el contenido se ajuste al borde redondeado
    },
    pickerContainer2: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      marginVertical: 10,
      overflow: 'hidden',  // Asegura que el contenido se ajuste al borde redondeado
    },
    pickerRight: {
      color: '#000',
      padding: 10,
    },  
})

export default registerStyles;
