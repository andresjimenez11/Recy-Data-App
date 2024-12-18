import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Image, Linking, Text, View } from 'react-native';

export default function WhatsappButton() {
    const [showMessage, setShowMessage] = useState(false); // Inicialmente el mensaje no se muestra

    useEffect(() => {
        // Mostrar el mensaje después de 2 segundos
        const showTimer = setTimeout(() => {
            setShowMessage(true); // Cambiar el estado para mostrar el mensaje
        }, 0); // Retraso de 2 segundos

        // Ocultar el mensaje después de 5 segundos
        const hideTimer = setTimeout(() => {
            setShowMessage(false); // Cambiar el estado para ocultar el mensaje
        }, 3000); // Retraso de 7 segundos (2 segundos de espera para mostrar + 5 segundos para desaparecer)

        // Limpiar los temporizadores cuando el componente se desmonta
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <View style={styles.container}>
            {/* Mensaje temporal, solo se muestra después de 2 segundos */}
            {showMessage && (
                <Text style={styles.helpText}>¿Necesitas ayuda?</Text>
            )}

            {/* Botón de WhatsApp */}
            <TouchableOpacity
                style={styles.whatsappButton}
                onPress={() => {
                    const url = 'https://api.whatsapp.com/send?phone=573138367385&text=%C2%A1Hola%2C%20necesito%20ayuda!'; // Reemplaza con tu número
                    Linking.openURL(url);
                }}
            >
                <Image
                    source={require('../../assets/images/whatsapp-49.png')} // Añade un ícono de WhatsApp a tu carpeta de assets
                    style={styles.whatsappIcon}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'flex-end', // Centra el mensaje sobre el botón
    },
    helpText: {
        marginBottom: 5, // Espacio entre el texto y el botón
        fontSize: 14,
        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        elevation: 3,
        zIndex: 999,
    },
    whatsappButton: {
        backgroundColor: '#25D366',
        borderRadius: 50,
        padding: 20,
        elevation: 5,
    },
    whatsappIcon: {
        width: 35,
        height: 35,
    },
});


