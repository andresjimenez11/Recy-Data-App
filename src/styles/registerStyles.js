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
    scrollContainer: {
      flex: 1,
      marginTop: 95,
    },
    scrollView: {
      paddingHorizontal: 10,
      paddingBottom: 70,
    },
    containerForm: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 40,
    },
    containerBottomForm: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 50,
      marginTop: 20,
      paddingVertical: 15,
      alignItems: 'center',
    },
    textContainerBottomForm:
    {
      color: "#000000",
      fontSize: 20,
      fontFamily: 'Comfortaa',
      marginBttom: 15, 
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#000',
      width: '100%',
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      fontSize: 16,
      fontFamily: 'Comfortaa'
    },
    inputAddress: {
      width: '40%',
      marginRight: 10,
    },
    inputAddressNumber:{
      width: '15%',
      textAlign: 'center',
    },
    labelAddressNumber: {
      color: '#ffffff',
    },
    labelRightSelector: {
      width: '30%',
      color: '#ffffff',
      fontFamily: 'Comfortaa',
      fontSize: 16,
    },
    labelRightSelectorBottomForm:{
      color: '#000000',
    },
    pickerContainer: {
      width: '70%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      marginVertical: 5,
      overflow: 'hidden',  // Asegura que el contenido se ajuste al borde redondeado
    },
    pickerContainer2: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      marginVertical: 5,
      overflow: 'hidden',  // Asegura que el contenido se ajuste al borde redondeado
    },
    pickerRight: {
      color: '#000',
      padding: 10,
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
})

export default registerStyles;
