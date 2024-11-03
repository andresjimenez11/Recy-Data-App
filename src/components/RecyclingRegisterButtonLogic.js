import { launchCamera } from 'react-native-image-picker';

export const getButtonContent = (index) => {
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("Captura de cámara cancelada");
      } else if (response.errorCode) {
        console.error("Error al abrir la cámara:", response.errorMessage);
      } else {
        console.log("Foto capturada:", response.assets[0].uri);
        // Puedes manejar la imagen capturada aquí
      }
    });
  };

  switch (index) {
    case 1:
      return {
        imageSource: require('../../assets/images/Contenedores icons (2).png'),
        text: 'Residuos limpios y secos como: plástico, vidrio, metales, papel y cartón.',
        onPress: openCamera,
      };
    case 2:
      return {
        imageSource: require('../../assets/images/Contenedores icons (3).png'),
        text: 'Papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros; residuos COVID-19 como tapabocas, guantes, entre otros.',
        onPress: openCamera,
      };
    case 3:
      return {
        imageSource: require('../../assets/images/Contenedores icons (1).png'),
        text: 'Restos de comida, residuos de corte de césped y poda de jardín, etc.',
        onPress: openCamera,
      };
    default:
      return {
        imageSource: null,
        text: '',
        onPress: () => console.log("Botón sin acción asignada"),
      };
  }
};
