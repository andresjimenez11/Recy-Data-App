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

export default function FormChain() {

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Cadena de Aprovechamiento')
  const [selectedSubType, setSelectedSubType] = useState('Reciclador');
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
  const [selectedTypeInfo, setSelectedTypeInfo] = useState('Servicios Publicos');
  const [selectedNameInfo, setSelectedNameInfo] = useState('');
    
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
        selectedTypeInfo,
        selectedNameInfo
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
                    <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.type}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.name}</Text>
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
                        <Text style={[formStyles.labelRightSelector, formStyles.labelRightSelectorBottomForm]}>{strings.name}</Text>
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