import React, { useState } from 'react';
import { 
  View, ScrollView, TextInput, Text, StyleSheet, 
  Dimensions, TouchableOpacity, KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, Keyboard, ImageBackground 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

/* Componentes */
import ButtonRegister from '../components/ButtonRegister';
import FormResidential from '../components/FormResidential';
import FormPublicServant from '../components/FormPublicServant';
import FormNoResidential from '../components/FormNoResidential';
import FormAcademy from '../components/FormAcademy';
import FormChain from '../components/FormChain';
import FormConsultory from '../components/FormConsultory';
import Overlay from '../components/Overlay';

/* Estilos */
import registerStyles from '../styles/registerStyles';
import formStyles from '../styles/formStyles';

export default function Register({ navigation }) {

  const [selectedType, setSelectedType] = useState('Residencial');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} 
    >

        <View style={registerStyles.wrapper}>
          <View style={registerStyles.container}>
            <ImageBackground 
              source={require('../../assets/images/background.jpg')} 
              style={registerStyles.backgroundImage}
            >
              <Overlay/>

 
              {/* Contenedor del ScrollView */}
              <View style={registerStyles.scrollContainer}>
                <ScrollView contentContainerStyle={registerStyles.scrollView}>

                  <View style={formStyles.containerForm}>
                    <Text style={formStyles.labelRightSelector}>Tipo</Text>
                    <View style={formStyles.pickerContainer}>
                    <Picker
                      style={formStyles.pickerRight}
                      selectedValue={selectedType}
                      onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                      <Picker.Item label="Residencial" value="Residencial"/>
                      <Picker.Item label="Servidor Público" value="Servidor Público"/>
                      <Picker.Item label="No Residencial" value="No Residencial" />
                      <Picker.Item label="Academia" value="Academia" />
                      <Picker.Item label="Cadena de Aprovechamiento" value="Cadena de Aprovechamiento" />
                      <Picker.Item label="Consultoría" value="Consultoría" />
                    </Picker>
                    </View>
                  </View> 

                  {selectedType === 'Residencial' && (
                    <FormResidential/>
                  )}

                  {selectedType === 'Servidor Público' && (
                    <FormPublicServant/>
                  )}

                  {selectedType === 'No Residencial' && (
                    <FormNoResidential/>
                  )}

                  {selectedType === 'Academia' && (
                    <FormAcademy/>
                  )}

                  {selectedType === 'Cadena de Aprovechamiento' && (
                    <FormChain/>
                  )}

                  {selectedType === 'Consultoría' && (
                    <FormConsultory/>
                  )}
                  
                </ScrollView>
              </View>
            </ImageBackground>
          </View>

          {/* Contenedor adicional al final */}
          <View style={registerStyles.additionalContainer}>
            <Text style={registerStyles.additionalText}></Text>
          </View>

          {/* Botón fijo */}
          <View style={registerStyles.buttonsContainer}>
              <ButtonRegister />
          </View>
        </View>

    </KeyboardAvoidingView>
  );
}
