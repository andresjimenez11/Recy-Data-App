import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings from '../util/strings'

const { width } = Dimensions.get('window');
const baseWidth = 375;  // Ancho base de referencia (por ejemplo, iPhone X)
const scale = width / baseWidth;

export default function ButtonLogin({stack, targetScreen}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate(stack, { screen: targetScreen })}>
            <Text style={styles.loginButtonText}>{strings.login}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        width: '50%',
        paddingVertical: '5%',
        marginBottom: 35,
        borderRadius: 15,
        backgroundColor: '#f7e650',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 18 * scale,
        color: '#000000',
        fontFamily: 'Comfortaa',
    },
})
