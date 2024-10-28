import React, { useState } from 'react';
import { 
  View, ScrollView, TextInput, Text, StyleSheet, 
  Dimensions, TouchableOpacity, KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, Keyboard, ImageBackground 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ButtonRegister from '../components/ButtonRegister';
import registerStyles from '../styles/registerStyles';
import Overlay from '../components/Overlay';

export default function Register({ navigation }) {

  const [selectedType, setSelectedType] = useState('Residencial');
  const [selectedStratum, setSelectedStratum] = useState('Estrato 1');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1');
  const [selectedCity, setSelectedCity] = useState('Bucaramanga');


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0} // Ajusta este valor según la altura del header
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

                  <View style={registerStyles.containerForm}>
                    <Text style={registerStyles.labelRightSelector}>Tipo</Text>
                    <View style={registerStyles.pickerContainer}>
                    <Picker
                      style={registerStyles.pickerRight}
                      selectedValue={selectedType}
                      onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                      <Picker.Item label="Residencial" value="Residencial" />
                      <Picker.Item label="Comercial" value="Comercial" />
                      <Picker.Item label="Industrial" value="Industrial" />
                    </Picker>
                    </View>
                  </View> 


                  <View style={registerStyles.containerForm}>
                    <Text style={registerStyles.labelRightSelector}>Sub Tipo</Text>
                    <View style={registerStyles.pickerContainer}>
                    <Picker
                      style={registerStyles.pickerRight}
                      selectedValue={selectedStratum}
                      onValueChange={(itemValue) => setSelectedStratum(itemValue)}
                    >
                      <Picker.Item label="Estrato 1" value="Estrato 1" />
                      <Picker.Item label="Estrato 2" value="Estrato 2" />
                      <Picker.Item label="Estrato 3" value="Estrato 3" />
                      <Picker.Item label="Estrato 4" value="Estrato 4" />
                      <Picker.Item label="Estrato 5" value="Estrato 5" />
                      <Picker.Item label="Estrato 6" value="Estrato 6" />
                    </Picker>
                    </View>
                  </View> 

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Codigo del recibo de aseo"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Nombre"
                      placeholderTextColor="#176b00"
                    />
                  </View>
                  
                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Apellido"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={[registerStyles.input, registerStyles.inputAddress]}
                      placeholder="Autopista"
                      placeholderTextColor="#176b00"
                    />
                    <TextInput
                      style={[registerStyles.input, registerStyles.inputAddressNumber]}
                      placeholder="00"
                      placeholderTextColor="#176b00"
                    />
                    <Text
                    style={registerStyles.labelAddressNumber}>
                      #
                    </Text>
                    <TextInput
                      style={[registerStyles.input, registerStyles.inputAddressNumber]}
                      placeholder="00"
                      placeholderTextColor="#176b00"
                    />
                    <Text
                    style={registerStyles.labelAddressNumber}>
                      -
                    </Text>
                    <TextInput
                      style={[registerStyles.input, registerStyles.inputAddressNumber]}
                      placeholder="00"
                      placeholderTextColor="#176b00"
                    />
                  </View>
                  
                  
                  <View style={registerStyles.containerForm}>
                    <View style={registerStyles.pickerContainer2}>
                    <Picker
                      style={registerStyles.pickerRight}
                      selectedValue={selectedCommune}
                      onValueChange={(itemValue) => setSelectedCommune(itemValue)}
                    >
                      <Picker.Item label="Comuna 1" value="Comuna 1" />
                      <Picker.Item label="Comuna 2" value="Comuna 2" />
                      <Picker.Item label="Comuna 3" value="Comuna 3" />
                    </Picker>
                    </View>
                  </View> 
                  

                  <View style={registerStyles.containerForm}>
                    <View style={registerStyles.pickerContainer2}>
                    <Picker
                      style={registerStyles.pickerRight}
                      selectedValue={selectedCity}
                      onValueChange={(itemValue) => setSelectedCity(itemValue)}
                    >
                      <Picker.Item label="Bucaramanga" value="Bucaramanga" />
                      <Picker.Item label="Barrancabermeja" value="Barrancabermeja" />

                    </Picker>
                    </View>
                  </View> 

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Teléfono"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Email"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="No. Personas generadoras de residuos"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerForm}>
                    <TextInput
                      style={registerStyles.input}
                      placeholder="Contraseña"
                      placeholderTextColor="#176b00"
                    />
                  </View>

                  <View style={registerStyles.containerBottomForm}>
                    
                    <View style={registerStyles.containerForm}>
                      <Text style={registerStyles.textContainerBottomForm}>Info Institucional</Text>
                    </View>
                    
                    <View style={registerStyles.containerForm}>
                      <Text style={[registerStyles.labelRightSelector, registerStyles.labelRightSelectorBottomForm]}>Tipo</Text>
                      <View style={registerStyles.pickerContainer}>
                      <Picker
                        style={registerStyles.pickerRight}
                        selectedValue={selectedType}
                        onValueChange={(itemValue) => setSelectedType(itemValue)}
                      >
                        <Picker.Item label="Residencial" value="Residencial" />
                        <Picker.Item label="Comercial" value="Comercial" />
                        <Picker.Item label="Industrial" value="Industrial" />
                      </Picker>
                      </View>
                    </View> 

                    <View style={registerStyles.containerForm}>
                      <Text style={[registerStyles.labelRightSelector, registerStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                      <View style={registerStyles.pickerContainer}>
                      <Picker
                        style={registerStyles.pickerRight}
                        selectedValue={selectedType}
                        onValueChange={(itemValue) => setSelectedType(itemValue)}
                      >
                        <Picker.Item label="Residencial" value="Residencial" />
                        <Picker.Item label="Comercial" value="Comercial" />
                        <Picker.Item label="Industrial" value="Industrial" />
                      </Picker>
                      </View>
                    </View> 

                    <View style={registerStyles.containerForm}>
                      <Text style={[registerStyles.labelRightSelector, registerStyles.labelRightSelectorBottomForm]}>Grado</Text>
                      <View style={registerStyles.pickerContainer}>
                      <Picker
                        style={registerStyles.pickerRight}
                        selectedValue={selectedType}
                        onValueChange={(itemValue) => setSelectedType(itemValue)}
                      >
                        <Picker.Item label="Residencial" value="Residencial" />
                        <Picker.Item label="Comercial" value="Comercial" />
                        <Picker.Item label="Industrial" value="Industrial" />
                      </Picker>
                      </View>
                    </View> 

                    <View style={registerStyles.containerForm}>
                      <Text style={[registerStyles.labelRightSelector, registerStyles.labelRightSelectorBottomForm]}>Curso</Text>
                      <View style={registerStyles.pickerContainer}>
                      <Picker
                        style={registerStyles.pickerRight}
                        selectedValue={selectedType}
                        onValueChange={(itemValue) => setSelectedType(itemValue)}
                      >
                        <Picker.Item label="Residencial" value="Residencial" />
                        <Picker.Item label="Comercial" value="Comercial" />
                        <Picker.Item label="Industrial" value="Industrial" />
                      </Picker>
                      </View>
                    </View> 

                  </View>
                  {/* Puedes añadir más inputs si lo necesitas */}
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
