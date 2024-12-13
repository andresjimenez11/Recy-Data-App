import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const formStyles = StyleSheet.create({

    containerForm: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
      },
      input: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: '#176b00',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        fontSize: 16,
        //fontFamily: 'Comfortaa'
      },
      inputAddress: {
        width: '40%',
        marginRight: 10,
      },
      inputAddressNumber:{
        width: '15%',
        textAlign: 'center',
      },
      inputPassword: {
        marginBottom: 40,
      },
      inputPasswordBF: {
        marginBottom: 20,
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
  
      // Contenedor formulario inferior
      containerBottomForm: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 30,
        paddingTop: 15,
        paddingBottom: 30,
        alignItems: 'center',
      },
      textContainerBottomForm:
      {
        color: "#000000",
        fontSize: 20,
        fontFamily: 'Comfortaa',
        marginBottom: 10, 
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
      pickerContainer3: {
        width: '40%',
        marginRight: 10,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        marginVertical: 5,
        overflow: 'hidden',  // Asegura que el contenido se ajuste al borde redondeado
      },
      pickerRight: {
        color: '#176b00',
        padding: 10,
        fontFamily: 'Comfortaa',
      }, 


      containerFormButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
      },
      registerButton: {
          width: '62%',
          paddingVertical: '6%',
          marginBottom: '13%',
          borderRadius: 15,
          backgroundColor: '#609800',
          alignItems: 'center',

          /* Sombras */
          shadowColor: '#000', 
          shadowOffset: {
            width: 0,
            height: 3, 
          },
          shadowOpacity: 0.2, 
          shadowRadius: 5, 
      
          elevation: 5, 
      },
      registerButtonText: {
          fontSize: 19,
          color: '#FFFFFF',
          fontFamily: 'Comfortaa',
      },


      hintText: {
        color: '#ffffff',
        fontSize: 14,
        marginVertical: 7,
        backgroundColor: '#ec5353',
        padding: 8,
        borderRadius: 8,
        width: '100%'
      },
})

export default formStyles;