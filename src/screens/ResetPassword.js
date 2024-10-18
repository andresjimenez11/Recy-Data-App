import { View, ImageBackground, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react'
import resetPasswordStyles from '../styles/resetPasswordStyles';
import ButtonResetPassword from '../components/ButtonResetPassword';
import Overlay from '../components/Overlay';

export default function ResetPassword({navigation}){
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
                    style={resetPasswordStyles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#176b00"
                />

                <ButtonResetPassword />

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
