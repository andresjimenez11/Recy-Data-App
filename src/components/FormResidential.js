import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import formStyles from '../styles/formStyles';

import colors from '../themes/colors';
import strings from '../util/strings';

// Firebase 
import app from '../../firebase-config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth(app);

export default function FormResidential() {

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

 
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = userCredential.user;
            Alert.alert('Se registro con éxito');
        })
    }
  

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
                    value={noContract}
                    onChangeText={setNoContract}
                    style={formStyles.input}
                    placeholder="Codigo del recibo de aseo"
                    placeholderTextColor={colors.primary}
                    keyboardType='numeric'
                />
            </View>

            <View style={formStyles.containerForm}>
                <TextInput
                    value={name}
                    onChangeText={setName}
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
                    onChangeText={(text) => setEmail(text)}
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
                    onChangeText={(text) => setPassword(text)}
                    style={[formStyles.input, formStyles.inputPassword]}
                    placeholder="Contraseña"
                    placeholderTextColor={colors.primary}
                    secureTextEntry
                />
            </View>
       
            <View style={formStyles.containerForm}>
                <TouchableOpacity style={styles.registerButton} onPress={handleCreateAccount}>
                    <Text style={styles.registerButtonText}>{strings.registered}</Text>
                </TouchableOpacity>
            </View>
            
        </View>

    );
}

const styles = StyleSheet.create({
    registerButton: {
        width: '50%',
        paddingVertical: '5%',
        marginBottom: 35,
        borderRadius: 15,
        backgroundColor: '#f7e650',
        alignItems: 'center',
    },
    registerButtonText: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'Comfortaa',
    },
})
