import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const resetPasswordStyles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#FFFFFF', // Fondo blanco general
      },
      topSection: {
        height: height * 0.80,
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 140,
      },
      input: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#000',
        padding: 10,
        marginBottom: 60,
        borderRadius: 10,
        fontSize: 18,
      },
      bottomWhiteSection: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Fondo blanco
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 128,
        height: 84,
      }
})

export default resetPasswordStyles;