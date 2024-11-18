import { StyleSheet, Dimensions } from 'react-native';
import ForgotPassword from '../components/ForgotPassword';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const loginStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
      },
      topSection: {
        height: height * 0.80,
        borderBottomLeftRadius: 70, 
        borderBottomRightRadius: 70,
        overflow: 'hidden', 
      },
      background: {
        flex: 1,
        justifyContent: 'center',
      },
      form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
      },
      logo: {
        width: 210,
        height: 202,
        marginBottom: 30,
      },
      input: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#000',
        padding: 10,
        marginBottom: 30,
        borderRadius: 10,
        fontSize: 18,
        fontFamily: 'Comfortaa'
      },
      bottomWhiteSection: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 128,
        height: 84,
      },

      // Checkbox
      containerCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
      },
      circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        marginRight: 8,
      },
      circleSelected: {
        backgroundColor: '#4CAF50',
      },
      text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Comfortaa',
      },

      // Botón
      forgotPassword: {
        color: '#ffffff',
      },

      // Botones de inicio y registro
      buttonsContainer: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
        zIndex: 2, 
      },
})

export default loginStyles;