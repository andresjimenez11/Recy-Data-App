import { launchCamera } from 'react-native-image-picker';

export const getButtonContent = (index) => {
  switch (index) {
    case 1:
      return {
        imageSource: require('../../assets/images/Contenedores icons (2).png'),
        text: 'Residuos limpios y secos como: plástico, vidrio, metales, papel y cartón.',
      };
    case 2:
      return {
        imageSource: require('../../assets/images/Contenedores icons (3).png'),
        text: 'Papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros; residuos COVID-19 como tapabocas, guantes, entre otros.',        
      };
    case 3:
      return {
        imageSource: require('../../assets/images/Contenedores icons (1).png'),
        text: 'Restos de comida, residuos de corte de césped y poda de jardín, etc.',        
      };
    default:
      return {
        imageSource: null,
        text: '',
        onPress: () => console.log("Botón sin acción asignada"),
      };
  }
};
