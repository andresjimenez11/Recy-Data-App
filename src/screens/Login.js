import { View, ImageBackground, TextInput, Text, KeyboardAvoidingView, Platform, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react'
import loginStyles from '../styles/loginStyles';
import ButtonLogin from '../components/ButtonLogin';
import ButtonRegister from '../components/ButtonRegister';
import ButtonResetPassword from '../components/ButtonResetPassword';
import ForgotPassword from '../components/ForgotPassword';
import Overlay from '../components/Overlay';
import strings from '../util/strings';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default function Login(){
    const [isSelected, setIsSelected] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Sesión iniciada');
            const user = userCredential.user;
            console.log(user);
            const userId = user.uid; // Obtener el ID del usuario
            // Navegar a la pantalla 'MainMenu' y pasar el ID del usuario
            navigation.navigate('App', {
                screen: 'MainMenu',
            params: {userId: userId}, // Pasar el ID como parámetro
            });
        })
        .catch(error => {
            if (error.code === 'auth/invalid-credential') {
                Alert.alert('El correo o la contraseña no es válida.');
            } 
            else if (error.code === 'auth/invalid-email') {
                Alert.alert('Ingrese un correo válido.');
            }
            else if (error.code ==='auth/missing-password'){
                Alert.alert('Ingrese una contraseña.')
            }        
            else {
            Alert.alert('Error', 'No se pudo iniciar sesión, intente nuevamente.');
            }
        })
    }

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
                            onChangeText={(text) => setEmail(text)}
                            style={loginStyles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#176b00"
                        />

                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            style={loginStyles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#176b00"
                            secureTextEntry
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
                        handle={handleSignIn}
                    />

                    <ButtonRegister/>
                
                </View>

                </View>
            </View>
        </KeyboardAvoidingView>
  
    )
}
