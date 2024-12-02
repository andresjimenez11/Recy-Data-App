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

export default function FormResidential() {

  const navigation = useNavigation();

  const [selectedType, setSelectedType] = useState('Residencial')
  const [selectedSubType, setSelectedSubType] = useState('Estrato 1');
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
