import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings from '../util/strings';

const { width } = Dimensions.get('window');
const baseWidth = 375;  // Ancho base de referencia (por ejemplo, iPhone X)
const scale = width / baseWidth;

export default function ButtonRegister() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButtonText}>{strings.registered}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    registerButton: {
        width: '50%',
        paddingVertical: '5%',
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
        fontSize: 18 * scale,
        color: '#FFFFFF',
        fontFamily: 'Comfortaa',
    },
})