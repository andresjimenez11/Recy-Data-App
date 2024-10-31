import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';

export default function FormAcademy() {

  /* Estados Contenedor Formulario Cadena de Aprovechamiento */  
  const [selectedSubType, setSelectedSubType] = useState('Docente');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1');
  const [selectedCity, setSelectedCity] = useState('Bucaramanga');

  /* Estados Contenedor Info Institucional */
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('');
  const [selectedNameInfo, setSelectedNameInfo] = useState('');
  const [selectedGradeInfo, setSelectedGradeInfo] = useState('');
  const [selectedCourseInfo, setSelectedCourseInfo] = useState('');

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
                    <Picker.Item label="Docente" value="Docente" />
                    <Picker.Item label="Estudiante" value="Estudiante" />
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
                    placeholder="Autopista"
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
                        <Picker.Item label="Primaria" value="Primaria" />
                        <Picker.Item label="Secundaria" value="Secundaria" />
                        <Picker.Item label="Universidad" value="Universidad" />
                    </Picker>
                    </View>
                </View> 


                {selectedTypeInfo === 'Primaria' && 
                <>
                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedNameInfo}
                        onValueChange={(itemValue) => setSelectedNameInfo(itemValue)}
                        >
                            <Picker.Item label="Escuela 1" value="Escuela 1" />
                            <Picker.Item label="Escuela 2" value="Escuela 2" />
                            <Picker.Item label="Escuela 3" value="Escuela 3" />
                            </Picker>
                        </View>
                    </View> 

                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Grado</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedGradeInfo}
                        onValueChange={(itemValue) => setSelectedGradeInfo(itemValue)}
                        >
                            <Picker.Item label="Primero" value="Primero" />
                            <Picker.Item label="Segundo" value="Segundo" />
                            <Picker.Item label="Tercero" value="Tercero" />
                            <Picker.Item label="Cuarto" value="Cuarto" />
                            <Picker.Item label="Quinto" value="Quinto" />
                        </Picker>
                        </View>
                    </View> 

                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Curso</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCourseInfo}
                        onValueChange={(itemValue) => selectedCourseInfo(itemValue)}
                        >
                            <Picker.Item label="Curso" value="Curso" />
                            <Picker.Item label="Curso" value="Curso" />
                            <Picker.Item label="Curso" value="Curso" />
                        </Picker>
                        </View>
                    </View>
                </>
                    
                }

                {selectedTypeInfo === 'Secundaria' && 
                <>
                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedNameInfo}
                        onValueChange={(itemValue) => setSelectedNameInfo(itemValue)}
                        >
                            <Picker.Item label="Colegio 4" value="Colegio 4" />
                            <Picker.Item label="Colegio 5" value="Colegio 5" />
                            <Picker.Item label="Colegio 6" value="Colegio 6" />
                            </Picker>
                        </View>
                    </View> 

                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Grado</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedGradeInfo}
                        onValueChange={(itemValue) => setSelectedGradeInfo(itemValue)}
                        >
                            <Picker.Item label="Sexto" value="Sexto" />
                            <Picker.Item label="Séptimo" value="Séptimo" />
                            <Picker.Item label="Octavo" value="Octavo" />
                            <Picker.Item label="Noveno" value="Noveno" />
                            <Picker.Item label="Décimo" value="Décimo" />
                            <Picker.Item label="Once" value="Once" />
                        </Picker>
                        </View>
                    </View> 

                    <View style={formStyles.containerForm}>
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Curso</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCourseInfo}
                        onValueChange={(itemValue) => selectedCourseInfo(itemValue)}
                        >
                            <Picker.Item label="Curso" value="Curso" />
                            <Picker.Item label="Curso" value="Curso" />
                            <Picker.Item label="Curso" value="Curso" />
                        </Picker>
                        </View>
                    </View>

                </>   

                }

                {selectedTypeInfo === 'Universidad' && 
                    <>
                        <View style={formStyles.containerForm}>
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Nombre</Text>
                            <View style={formStyles.pickerContainer}>
                            <Picker
                            style={formStyles.pickerRight}
                            selectedValue={selectedNameInfo}
                            onValueChange={(itemValue) => setSelectedNameInfo(itemValue)}
                            >
                                <Picker.Item label="Universidad 1" value="Universidad 1" />
                                <Picker.Item label="Universidad 2" value="Universidad 2" />
                                <Picker.Item label="Universidad 3" value="Universidad 3" />
                                </Picker>
                            </View>
                        </View> 

                        <View style={formStyles.containerForm}>
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Grado</Text>
                            <View style={formStyles.pickerContainer}>
                            <Picker
                            style={formStyles.pickerRight}
                            selectedValue={selectedGradeInfo}
                            onValueChange={(itemValue) => setSelectedGradeInfo(itemValue)}
                            >
                                <Picker.Item label="Curso" value="Curso" />
                                <Picker.Item label="Curso" value="Curso" />
                                <Picker.Item label="Curso" value="Curso" />
                            </Picker>
                            </View>
                        </View> 

                        <View style={formStyles.containerForm}>
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>Curso</Text>
                            <View style={formStyles.pickerContainer}>
                            <Picker
                            style={formStyles.pickerRight}
                            selectedValue={selectedCourseInfo}
                            onValueChange={(itemValue) => selectedCourseInfo(itemValue)}
                            >
                                <Picker.Item label="Residencial" value="Residencial" />
                                <Picker.Item label="Comercial" value="Comercial" />
                                <Picker.Item label="Industrial" value="Industrial" />
                            </Picker>
                            </View>
                        </View> 
                    </>
                }
            </View>
        </View>

    );
}