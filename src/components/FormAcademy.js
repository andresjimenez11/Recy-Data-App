import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';
import strings from '../util/strings';

// Firebase 
import app, { db } from '../../firebase-config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from '@react-navigation/native';

const auth = getAuth(app);

export default function FormAcademy() {

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Academia')
  const [selectedSubType, setSelectedSubType] = useState('Docente');
  const [noContract, setNoContract] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setSreet] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1');
  const [selectedCity, setSelectedCity] = useState('Bucaramanga');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [noPeople, setNoPeople] = useState('');
  const [password, setPassword] = useState('');

  /* Estados Contenedor Info Institucional */
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('Primaria');
  const [selectedNameInfo, setSelectedNameInfo] = useState('');
  const [selectedGradeInfo, setSelectedGradeInfo] = useState('');
  const [selectedCourseInfo, setSelectedCourseInfo] = useState('');

  const handleCreateAccount = async () => {

    if (
        !noContract.trim() ||
        !name.trim() ||
        !lastName.trim() ||
        !street.trim() ||
        !n1.trim() ||
        !n2.trim() ||
        !n3.trim() ||
        !phone.trim() ||
        !email.trim() ||
        !noPeople.trim() ||
        !password.trim()
      ) {
        // Mostrar mensaje de error si falta algún campo
        Alert.alert('Faltan datos por llenar', 'Todos los campos deben estar completados');
        return;
      }

    try {
      // Crea el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Agrega los datos adicionales a Firestore
      await addDoc(collection(db, 'usuarios'), {
        userId: user.uid,
        selectedType,
        selectedSubType,
        noContract,
        name,
        lastName,
        street,
        n1,
        n2,
        n3,
        selectedCommune,
        selectedCity,
        phone,
        email,
        noPeople,
        selectedTypeInfo,
        selectedNameInfo,
        selectedGradeInfo,
        selectedCourseInfo,
      });

      Alert.alert(
        'Éxito',
        'Cuenta creada con éxito',
        [
            {
                text: 'OK',
                onPress: () => navigation.navigate('Login'), // Redirige después de cerrar el alert
            },
        ],
        { cancelable: false }
    );
    
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Este correo ya está en uso. Por favor, utiliza otro.');
        } 
        else if (error.code === 'auth/invalid-email') {
            Alert.alert('Correo No válido.');
        }        
        else {
        console.error("Error al crear la cuenta o guardar los datos:", error);
        Alert.alert('Error', 'No se pudo registrar el usuario');
        }
    }
  };

  return (

        <View>
            <View style={formStyles.containerForm}>
                <Text style={formStyles.labelRightSelector}>{strings.subType}</Text>
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
                    onChangeText={(text) => setNoContract(text)}
                    style={formStyles.input}
                    placeholder="Codigo del recibo de aseo"
                    placeholderTextColor={colors.primary}
                    keyboardType='numeric'
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setName(text)}
                    style={formStyles.input}
                    placeholder="Nombre"
                    placeholderTextColor={colors.primary}
                />
            </View>
                
            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setLastName(text)}
                    style={formStyles.input}
                    placeholder="Apellido"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setSreet(text)}
                    style={[formStyles.input, formStyles.inputAddress]}
                    placeholder="Calle"
                    placeholderTextColor={colors.primary}
                />
                <TextInput
                    onChangeText={(text) => setN1(text)}
                    style={[formStyles.input, formStyles.inputAddressNumber]}
                    placeholder="00"
                    placeholderTextColor={colors.primary}
                />
                <Text
                style={formStyles.labelAddressNumber}>
                    #
                </Text>
                <TextInput
                    onChangeText={(text) => setN2(text)}
                    style={[formStyles.input, formStyles.inputAddressNumber]}
                    placeholder="00"
                    placeholderTextColor={colors.primary}
                />
                <Text
                style={formStyles.labelAddressNumber}>
                    -
                </Text>
                <TextInput
                    onChangeText={(text) => setN3(text)}
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
                    onChangeText={(text) => setPhone(text)}
                    style={formStyles.input}
                    placeholder="Teléfono"
                    placeholderTextColor={colors.primary}
                    keyboardType='numeric'
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    style={formStyles.input}
                    placeholder="Email"
                    placeholderTextColor={colors.primary}
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setNoPeople(text)}
                    style={formStyles.input}
                    placeholder="No. Personas generadoras de residuos"
                    placeholderTextColor={colors.primary}
                    keyboardType='numeric'
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    style={[formStyles.input, formStyles.inputPasswordBF]}
                    placeholder="Contraseña"
                    placeholderTextColor={colors.primary}
                    secureTextEntry
                />
            </View>

            <View style={formStyles.containerBottomForm}> 
                <View style={formStyles.containerForm}>
                    <Text style={formStyles.textContainerBottomForm}>{strings.institutionalInfo}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.name}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.grade}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.schoolGrade}</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCourseInfo}
                        onValueChange={(itemValue) => setSelectedCourseInfo(itemValue)}
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.name}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.grade}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.schoolGrade}</Text>
                        <View style={formStyles.pickerContainer}>
                        <Picker
                        style={formStyles.pickerRight}
                        selectedValue={selectedCourseInfo}
                        onValueChange={(itemValue) => setSelectedCourseInfo(itemValue)}
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
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.name}</Text>
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
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.grade}</Text>
                            <View style={formStyles.pickerContainer}>
                            <Picker
                            style={formStyles.pickerRight}
                            selectedValue={selectedGradeInfo}
                            onValueChange={(itemValue) => setSelectedGradeInfo(itemValue)}
                            >
                                <Picker.Item label="Grado" value="Grado" />
                                <Picker.Item label="Grado" value="Grado" />
                                <Picker.Item label="Grado" value="Grado" />
                            </Picker>
                            </View>
                        </View> 

                        <View style={formStyles.containerForm}>
                            <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.schoolGrade}</Text>
                            <View style={formStyles.pickerContainer}>
                            <Picker
                            style={formStyles.pickerRight}
                            selectedValue={selectedCourseInfo}
                            onValueChange={(itemValue) => setSelectedCourseInfo(itemValue)}
                            >
                                <Picker.Item label="Curso" value="Curso" />
                                <Picker.Item label="Curso" value="Curso" />
                                <Picker.Item label="Curso" value="Curso" />
                            </Picker>
                            </View>
                        </View> 
                    </>
                }
            </View>

            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.registerButton} onPress={handleCreateAccount}>
                    <Text style={styles.registerButtonText}>{strings.registered}</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40,
      },
    registerButton: {
        width: '62%',
        paddingVertical: '6%',
        marginBottom: '13%',
        borderRadius: 15,
        backgroundColor: '#609800',
        alignItems: 'center',

        /* Sombras */
        shadowColor: '#000', 
        shadowOffset: {
          width: 0,
          height: 3, 
        },
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
    
        elevation: 5, 
    },
    registerButtonText: {
        fontSize: 19,
        color: '#FFFFFF',
        fontFamily: 'Comfortaa',
    },
})