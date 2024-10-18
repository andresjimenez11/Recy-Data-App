import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const baseWidth = 375;  // Ancho base de referencia (por ejemplo, iPhone X)
const scale = width / baseWidth;

export default function ButtonResetPassword() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar código de recuperación</Text>
                </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '85%',
        backgroundColor: '#609800',
        padding: 13,
        borderRadius: 15,
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
      buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontFamily: 'Comfortaa'
      },
      
})