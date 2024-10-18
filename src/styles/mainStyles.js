import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const mainStyles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#FFFFFF', // Fondo blanco general
      },
      topSection: {
        height: height * 0.85,
        borderBottomLeftRadius: 70, // Bordes redondeados en la parte inferior
        borderBottomRightRadius: 70,
        overflow: 'hidden', // Asegura que el contenido no se desborde
      },
      background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      form: {
        flex: 1,
        alignItems: 'center',
      },
      logo: {
        width: '80%',
        marginBottom: 250,
      },
      bottomWhiteSection: {
        height: height * 0.25,
        backgroundColor: '#FFFFFF', // Fondo blanco
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonsContainer: {
        position: 'absolute', // Posicionamiento absoluto
        bottom: '3%', // Posición desde la parte inferior de la pantalla
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 2, // Asegura que esté por encima de todo
      },
})

export default mainStyles;