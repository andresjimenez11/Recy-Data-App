import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';
import strings from '../util/strings';

// Firebase 
import app, { db } from '../../firebase-config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import firebase from '../database/firebase';

import { useNavigation } from '@react-navigation/native';

import { validatePassword } from '../util/validation';

const auth = getAuth(app);

export default function FormPublicServant() {

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Servidor Público')
  const [selectedSubType, setSelectedSubType] = useState('Estrato 1');
  const [noContract, setNoContract] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setSreet] = useState('Calle');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [selectedCity, setSelectedCity] = useState('68001 - Bucaramaga');
  const [selectedCommune, setSelectedCommune] = useState('Comuna 1 Norte');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [noPeople, setNoPeople] = useState('');
  const [password, setPassword] = useState('');

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

      if (!validatePassword(password)) {
        Alert.alert(
          'Contraseña inválida',
          'La contraseña debe tener al menos 8 caracteres, incluyendo una letra, un número y un carácter especial.'
        );
        return;
      }

    try {
      // Crea el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Agrega los datos adicionales a Firestore
      await firebase.db.collection('usuarios').add({
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
                <View style={formStyles.pickerContainer3}>
                        <Picker
                            style={formStyles.pickerRight}
                            selectedValue={street}
                            onValueChange={(itemValue) => setSreet(itemValue)}
                        >
                            <Picker.Item label="Calle" value="Calle" />
                            <Picker.Item label="Carrera" value="Carrera" />
                            <Picker.Item label="Carretera" value="Carretera" />
                            <Picker.Item label="Circunvalar" value="Circunvalar" />
                            <Picker.Item label="Manga" value="Manga" />
                            <Picker.Item label="Kilometro" value="Kilometro" />
                            <Picker.Item label="Finca" value="Finca" />
                            <Picker.Item label="Manzana" value="Manzana" />
                            <Picker.Item label="Vereda" value="Vereda" />
                            <Picker.Item label="Vía" value="Vía" />
                            <Picker.Item label="Hacienda" value="Hacienda" />
                            <Picker.Item label="Corregimiento" value="Corregimiento" />
                            <Picker.Item label="Avenida" value="Avenida" />
                            <Picker.Item label="Diagonal" value="Diagonal" />
                            <Picker.Item label="Transversal" value="Transversal" />
                            <Picker.Item label="Circular" value="Circular" />
                            <Picker.Item label="Callejon" value="Callejon" />
                        </Picker>
                    </View>
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
                        selectedValue={selectedCity}
                        onValueChange={(itemValue) => setSelectedCity(itemValue)}
                    >
                        <Picker.Item label="68001 - Bucaramaga" value="68001 - Bucaramaga" />
                        <Picker.Item label="68081 - Barrancabermeja" value="68081 - Barrancabermeja" />
                    </Picker>
                </View>
            </View> 
                
            {selectedCity === '68001 - Bucaramaga' && 
                <>
                    <View style={formStyles.containerForm}>
                        <View style={formStyles.pickerContainer2}>
                            <Picker
                                style={formStyles.pickerRight}
                                selectedValue={selectedCommune}
                                onValueChange={(itemValue) => setSelectedCommune(itemValue)}
                            >
                                <Picker.Item label="Comuna 1 Norte" value="Comuna 1 Norte" />
                                <Picker.Item label="Comuna 2 Nororiental" value="Comuna 2 Nororiental" />
                                <Picker.Item label="Comuna 3 San Francisco" value="Comuna 3 San Francisco" />
                                <Picker.Item label="Comuna 4 Occidental" value="Comuna 4 Occidental" />
                                <Picker.Item label="Comuna 5 García Rovira" value="Comuna 5 García Rovira" />
                                <Picker.Item label="Comuna 6 La Concordia" value="Comuna 6 La Concordia" />
                                <Picker.Item label="Comuna 7 La Ciudadela" value="Comuna 7 La Ciudadela" />
                                <Picker.Item label="Comuna 8 Sur Occidente" value="Comuna 8 Sur Occidente" />
                                <Picker.Item label="Comuna 9 La Pedregosa" value="Comuna 9 La Pedregosa" />
                                <Picker.Item label="Comuna 10 Provenza" value="Comuna 10 Provenza" />
                                <Picker.Item label="Comuna 11 Sur" value="Comuna 11 Sur" />
                                <Picker.Item label="Comuna 12 Cabecera del llano" value="Comuna 12 Cabecera del llano" />
                                <Picker.Item label="Comuna 13 Oriental" value="Comuna 13 Oriental" />
                                <Picker.Item label="Comuna 14 Morrorico" value="Comuna 14 Morrorico" />
                                <Picker.Item label="Comuna 15 Centro" value="Comuna 15 Centro" />
                                <Picker.Item label="Comuna 16 Lagos del Cacique" value="Comuna 16 Lagos del Cacique" />
                                <Picker.Item label="Comuna 17 Mutis" value="Comuna 17 Mutis" />
                            </Picker>
                        </View>
                    </View> 
                </>   
            }


            {selectedCity === '68081 - Barrancabermeja' && 
                <>
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
                                <Picker.Item label="Comuna 4" value="Comuna 4" />
                                <Picker.Item label="Comuna 5" value="Comuna 5" />
                                <Picker.Item label="Comuna 6" value="Comuna 6" />
                                <Picker.Item label="Comuna 7" value="Comuna 7" />
                            </Picker>
                        </View>
                    </View> 
                </>   
            } 

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
                    style={[formStyles.input, formStyles.inputPassword]}
                    placeholder="Contraseña"
                    placeholderTextColor={colors.primary}
                    secureTextEntry
                />
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