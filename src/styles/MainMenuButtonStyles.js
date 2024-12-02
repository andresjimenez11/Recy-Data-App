import { StyleSheet, Dimensions } from 'react-native';

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
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
  buttonStyle: {
    backgroundColor: '#4CAF50', // Color de fondo del botón
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '45%', // Ajusta el ancho para que quepan dos botones en cada fila
    marginVertical: 10,
    marginHorizontal: 5, // Espacio entre los botones
    alignItems: 'center',
    paddingVertical: 15,
  },
  ButtonRow:{
    flexDirection: 'row',
    flex: 1,
    padding: 5, // Espacio entre botones
    width: '80%', // Ajusta el ancho de la fila
    marginBottom:5, // Espacio entre las imágenes y el botón
    marginTop: 5, // Ajusta este valor para mover los botones hacia arriba
   },

   logoutButton:{
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
   }
});
