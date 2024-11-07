import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import strings from '../util/strings';

const { width } = Dimensions.get('window');
const baseWidth = 375;  // Ancho base de referencia (por ejemplo, iPhone X)
const scale = width / baseWidth;

export default function ForgotPassword() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity>
            <Text style={styles.forgotPassword} onPress={() => navigation.navigate('ResetPassword')}>{strings.forgotPassword}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        marginTop: '1%',
        fontSize: 16 * scale,
        color: '#6B7280',
    },
})