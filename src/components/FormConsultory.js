import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';

export default function FormConsultory() {

  const [selectedSubType, setSelectedSubType] = useState('Estrato 1');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1');
  const [selectedCity, setSelectedCity] = useState('Bucaramanga');

  return (

        <View>
            <View style={formStyles.containerForm}>
                <Text style={formStyles.labelRightSelector}>Sub Tipo</Text>
                <View style={formStyles.pickerContainer}>
                <Picker
                    style={formStyles.pickerRight}
                    selectedValue={selectedSubType}
                    onValueChange={(itemValue) => setSelectedSubType(itemValue)}
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

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Codigo del recibo de aseo"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Nombre"
                    placeholderTextColor={colors.primary}
                />
            </View>
                
            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Apellido"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    style={[formStyles.input, formStyles.inputAddress]}
                    placeholder="Calle"
                    placeholderTextColor={colors.primary}
                />
                <TextInput
                    style={[formStyles.input, formStyles.inputAddressNumber]}
                    placeholder="00"
                    placeholderTextColor={colors.primary}
                />
                <Text
                style={formStyles.labelAddressNumber}>
                    #
                </Text>
                <TextInput
                    style={[formStyles.input, formStyles.inputAddressNumber]}
                    placeholder="00"
                    placeholderTextColor={colors.primary}
                />
                <Text
                style={formStyles.labelAddressNumber}>
                    -
                </Text>
                <TextInput
                    style={[formStyles.input, formStyles.inputAddressNumber]}
                    placeholder="00"
                    placeholderTextColor={colors.primary}
                />
            </View>
                
                
            <View style={formStyles.containerForm}>
                <View style={formStyles.pickerContainer2}>
                    <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCommune}
                        onValueChange={(itemValue) => setSelectedCommune(itemValue)}
                    >
                        <Picker.Item label="Comuna 1" value="Comuna 1" />
                        <Picker.Item label="Comuna 2" value="Comuna 2" />
                        <Picker.Item label="Comuna 3" value="Comuna 3" />
                    </Picker>
                </View>
            </View> 
                

            <View style={formStyles.containerForm}>
                <View style={formStyles.pickerContainer2}>
                    <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCity}
                        onValueChange={(itemValue) => setSelectedCity(itemValue)}
                    >
                        <Picker.Item label="Bucaramanga" value="Bucaramanga" />
                        <Picker.Item label="Barrancabermeja" value="Barrancabermeja" />

                    </Picker>
                </View>
            </View> 

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Teléfono"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Email"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="No. Personas generadoras de residuos"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    style={formStyles.input}
                    placeholder="Contraseña"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerBottomForm}> 
                <View style={formStyles.containerForm}>
                    <Text style={formStyles.textContainerBottomForm}>Info Institucional</Text>
                </View>
                
                <View style={formStyles.containerForm}>
                    <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Tipo</Text>
                    <View style={formStyles.pickerContainer}>
                    <Picker
                    style={formStyles.pickerRight}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                    <Picker.Item label="Residencial" value="Residencial" />
                    <Picker.Item label="Comercial" value="Comercial" />
                    <Picker.Item label="Industrial" value="Industrial" />
                    </Picker>
                    </View>
                </View> 

                <View style={formStyles.containerForm}>
                    <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                    <View style={formStyles.pickerContainer}>
                    <Picker
                    style={formStyles.pickerRight}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                    <Picker.Item label="Residencial" value="Residencial" />
                    <Picker.Item label="Comercial" value="Comercial" />
                    <Picker.Item label="Industrial" value="Industrial" />
                    </Picker>
                    </View>
                </View> 

                <View style={formStyles.containerForm}>
                    <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Grado</Text>
                    <View style={formStyles.pickerContainer}>
                    <Picker
                    style={formStyles.pickerRight}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                    <Picker.Item label="Residencial" value="Residencial" />
                    <Picker.Item label="Comercial" value="Comercial" />
                    <Picker.Item label="Industrial" value="Industrial" />
                    </Picker>
                    </View>
                </View> 

                <View style={formStyles.containerForm}>
                    <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Curso</Text>
                    <View style={formStyles.pickerContainer}>
                    <Picker
                    style={formStyles.pickerRight}
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                    <Picker.Item label="Residencial" value="Residencial" />
                    <Picker.Item label="Comercial" value="Comercial" />
                    <Picker.Item label="Industrial" value="Industrial" />
                    </Picker>
                    </View>
                </View> 
            </View>
        </View>

    );
}
