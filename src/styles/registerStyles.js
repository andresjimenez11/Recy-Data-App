import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const registerStyles = StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    container: {
      flex: 1,
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
      paddingHorizontal: 10,
      paddingBottom: 0,
    },

    /* Contenedor blanco inferior */
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
})

export default registerStyles;
