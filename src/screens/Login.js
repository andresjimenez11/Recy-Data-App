import { View, ImageBackground, TextInput, Text, KeyboardAvoidingView, Platform, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react'
import loginStyles from '../styles/loginStyles';
import ButtonLogin from '../components/ButtonLogin';
import ButtonRegister from '../components/ButtonRegister';
import ButtonResetPassword from '../components/ButtonResetPassword';
import ForgotPassword from '../components/ForgotPassword';
import Overlay from '../components/Overlay';
import strings from '../util/strings';


export default function Login({navigation}){
    const [isSelected, setIsSelected] = useState(false);
    return (
  
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
        >
            <View style={loginStyles.container}>
            {/* Contenedor superior con imagen de fondo */}
                <View style={loginStyles.topSection}>
                    <ImageBackground 
                    source={require('../../assets/images/background3.jpg')} 
                    style={loginStyles.background}
                    >
                    {/* Capa verde semitransparente */}
                    <Overlay />
        
                    <View style={loginStyles.form}>
                        <Image source={require('../../assets/images/logo3.png')} style={loginStyles.logo}/>
                        <TextInput
                            style={loginStyles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#176b00"
                        />

                        <TextInput
                            style={loginStyles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#176b00"
                        />
                        
                        <TouchableOpacity 
                            style={loginStyles.containerCheckbox} 
                            onPress={() => setIsSelected(!isSelected)}
                            >
                            <View style={[loginStyles.circle, isSelected && loginStyles.circleSelected]} />
                            <Text style={loginStyles.text}>{strings.rememberUser}</Text>
                        </TouchableOpacity>

                        <ForgotPassword style={loginStyles.forgotPassword}/>
                    </View>
                    </ImageBackground>
                </View>
        
                <View style={loginStyles.bottomWhiteSection}>

                <View style={loginStyles.buttonsContainer}>
          
                    <ButtonLogin 
                        stack='App'
                        targetScreen='MainMenu'
                    />

                    <ButtonRegister/>
                
                </View>

                </View>
            </View>
        </KeyboardAvoidingView>
  
    )
}
