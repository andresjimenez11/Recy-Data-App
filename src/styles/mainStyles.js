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

       // Contenedor para alinear las imágenes en una fila

       imagesRow:{
        flexDirection: 'row',
        justifyContent: 'space-between', // Espacio entre imágenes
        width: '80%', // Ajusta el ancho de la fila
        marginBottom:5, // Espacio entre las imágenes y el botón
        marginTop: 100, // Ajusta este valor para mover los botones hacia arriba
       },

      // Estilo para las imágenes antes RecyclingREcords

      imageStyle:{
        width: 100, // Ajusta el tamaño de las imágenes
        height: 100,
        marginBottom: 10,
        
      },

      // Contenedor adicional:

      additionalContainer: {
        flex: 1,
        padding: 20, // Espaciado interno
        alignItems: 'flex-center', // Centra todos los elementos horizontalmente
        justifyContent: 'flex-start', // Alinear desde la parte superior
    },

    // Fila de imagen y texto:

      imageTextRow: {
        flexDirection: 'row', // Para alinear la imagen y el texto en una fila
        alignItems: 'center', // Centrar verticalmente
        marginBottom: 20, // Espacio entre esta sección y la siguiente
    },

    // Imagen lateral:

      smallImage: {
        width: 80, // Ancho de la imagen lateral
        height: 80, // Alto de la imagen lateral
        marginRight: 10, // Espacio entre la imagen y el texto
        resizeMode: 'contain'
    },

    // Imagen peso:

      weightImage: {
        flexDirection: 'column',
          walignItems: 'center', // Centrar verticalmente
          width: '80%', // Ancho completo
          alignContent: 'center',
          marginRight: 10, // Espacio entre la imagen y el texto
      },

      // contenedor cámara:

      cameraContainer: {
        flexDirection: 'column',
        alignItems: 'center',   // Centrar horizontalmente
        flex: 1,
        justifyContent: 'center' // Centrar verticalmente si el contenedor tiene espacio adicional
    },
    

    // Texto largo:

      longText: {
        flex: 1, // Ocupa el espacio restante
        fontSize: 16, // Tamaño de la fuente
        color: '#ffffff', // Color del texto
    },

    // Contenedor de fecha:

      dateContainer: {
        marginBottom: 20, // Espacio inferior
    },

    // Label:

      label: {
        fontSize: 16, // Tamaño de la fuente
        color: '#ffffff', // Color del texto
        marginBottom: 5, // Espacio inferior
    },

    // Input 

    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      color: '#176b00',
      width: '600',
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      fontSize: 16,
      fontFamily: 'Comfortaa',
  },     
  
    
})

export default mainStyles;