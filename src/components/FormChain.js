import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';

export default function FormChain() {

  /* Estados Contenedor Formulario Cadena de Aprovechamiento */  
  const [selectedSubType, setSelectedSubType] = useState('Reciclador');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1');
  const [selectedCity, setSelectedCity] = useState('Bucaramanga');

  /* Estados Contenedor Info Institucional */
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('Servicios Publicos');
  const [selectedNameInfo, setSelectedNameInfo] = useState('');
    

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
                    <Picker.Item label="Reciclador" value="Reciclador" />
                    <Picker.Item label="Asociaciones de Recicladores" value="Asociaciones de Recicladores" />
                    <Picker.Item label="ECA" value="ECA" />
                    <Picker.Item label="Bodegas de Comercialización" value="Bodegas de Comercialización" />
                    <Picker.Item label="Transformadores" value="Transformadores" />
                    <Picker.Item label="Comercializadores" value="Comercializadores" />
                    <Picker.Item label="Cliente Final" value="Cliente Final" />
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
                    selectedValue={selectedTypeInfo}
                    onValueChange={(itemValue) => setSelectedTypeInfo(itemValue)}
                    >
                    <Picker.Item label="Servicios Publicos" value="Servicios Publicos" />
                    <Picker.Item label="Organización de Recicladores" value="Organización de Recicladores" />
                    </Picker>
                    </View>
                </View> 

                {selectedTypeInfo === 'Servicios Publicos' ? (
                                       
                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedNameInfo}
                        onValueChange={(itemValue) => setSelectedNameInfo(itemValue)}
                        >  
                            <Picker.Item label="BIOTA" value="BIOTA" />
                            <Picker.Item label="Servicio Publico 2" value="Servicio Publico 2" />
                            <Picker.Item label="Servicio Publico 3" value="Servicio Publico 3" />
                        </Picker>
                        </View>
                    </View> 
                ) : (

                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedNameInfo}
                        onValueChange={(itemValue) => setSelectedNameInfo(itemValue)}
                        >  
                            <Picker.Item label="COREMAB" value="COREMAB" />
                            <Picker.Item label="JVM" value="JVM" />
                            <Picker.Item label="ARAACOL" value="ARAACOL" />
                            <Picker.Item label="AREYA ESP." value="AREYA ESP." />
                            <Picker.Item label="REDECOL ESP." value="REDECOL ESP." />
                            <Picker.Item label="ASORBANUES" value="ASORBANUES" />
                            <Picker.Item label="FUNDACSCOL E.S.P" value="FUNDACSCOL E.S.P" />
                            <Picker.Item label="LIDERAZGO AMBIENTAL" value="LIDERAZGO AMBIENTAL" />
                            <Picker.Item label="ASOGECOL" value="ASOGECOL" />
                            <Picker.Item label="ASOCIACIÓN M.C" value="ASOCIACIÓN M.C" />
                        </Picker>
                        </View>
                    </View> 
                )} 

            </View>
        </View>

    );
}