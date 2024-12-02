import { launchCamera } from 'react-native-image-picker';
import strings from '../util/strings';

export const getButtonContent = (index) => {
  switch (index) {
    case 1:
      return {
        imageSource: require('../../assets/images/Contenedores icons (2).png'),
        text: strings.cleanDryWaste,
      };
    case 2:
      return {
        imageSource: require('../../assets/images/Contenedores icons (3).png'),
        text: strings.contaminatedWaste,        
      };
    case 3:
      return {
        imageSource: require('../../assets/images/Contenedores icons (1).png'),
        text: strings.foodWaste,        
      };
    default:
      return {
        imageSource: null,
        text: '',
        onPress: () => console.log("Botón sin acción asignada"),
      };
  }
};
