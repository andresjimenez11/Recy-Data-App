import { View, ImageBackground, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React from 'react'
import resetPasswordStyles from '../styles/resetPasswordStyles';
import ButtonResetPassword from '../components/ButtonResetPassword';
import Overlay from '../components/Overlay';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ResetPassword({navigation}){
  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
 
  const handlePassword = async () => {
    await sendPasswordResetEmail(auth, email)
    .then(() => alert("Código de recuperación de contraseña ha sido enviado al email"))
    .catch(error => {
      if (error.code === 'auth/missing-email') {
        Alert.alert('Por favor ingrese un correo');
      } 
      else if (error.code === 'auth/invalid-email') {
          Alert.alert('Correo No válido.');
      }        
      else {
      Alert.alert('Error', 'No se pudo recuperar la contraseña');
      }
    })
  }
  return (
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
      >
      <View style={resetPasswordStyles.container}>
        {/* Contenedor superior con imagen de fondo */}
        <View style={resetPasswordStyles.topSection}>
          <ImageBackground 
            source={require('../../assets/images/background2.jpg')} 
            style={resetPasswordStyles.background}
          >
            {/* Capa verde semitransparente */}
            <Overlay />

            <View style={resetPasswordStyles.form}>
                
                <TextInput
                  onChangeText={(text) => setEmail(text)}
                    style={resetPasswordStyles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#176b00"
                />

                <ButtonResetPassword 
                  handle={handlePassword}
                />

            </View>
          </ImageBackground>
        </View>

        <View style={resetPasswordStyles.bottomWhiteSection}>
          <Image 
          source={require('../../assets/images/logo2.png')}
          style={resetPasswordStyles.image}/>
        </View>
      </View>
      </KeyboardAvoidingView>
    )
}
