import React, { useState, useRef, useEffect } from 'react';
import {useCameraPermissions} from 'expo-camera';
import { Camera, CameraType, FlashMode } from 'expo-camera/legacy';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import strings from '../util/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const cameraRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(true);

  useEffect(() => {
    // Solicitar permisos de la cámara si no están concedidos
    if(!permission?.granted){
      requestPermission();
    }
    
  }, [permission]);

  useFocusEffect(
    React.useCallback(() => {
       // Activar la cámara al enfocar la pantalla
       setIsCameraActive(true);

       return() => {
        // Desactivar la cámara al desenfocar la pantalla
        setIsCameraActive(false);
       };
    }, [])
  );

  if (!permission) {
    // Cargado permisos de la camara
    return <View />;
  }

  if (!permission.granted) {
    // Permisos no concedidos
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{strings.camera_permission_request}</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const  toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const toggleFlashMode = () => {
    setFlashMode(current =>
      current === FlashMode.off
        ? FlashMode.on
        : current === FlashMode.on
        ? FlashMode.auto
        : FlashMode.off
    );
  };

  const getFlashIcon = () => {
    if (flashMode === FlashMode.off) return 'bolt';
    if (flashMode === FlashMode.on) return 'bolt';
    if (flashMode === FlashMode.auto) return 'bolt';
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      
      navigation.navigate('PhotoPreview', { photoUri: photo.uri });
    }
  };

  return (
    <View style={styles.container}>
      {isCameraActive ?(
      <Camera ref={cameraRef} style={styles.camera} type={type} flashMode={flashMode}>
        <View style={styles.ButtonRow}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Icon name='refresh' size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Icon name='camera' size={40} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
            {flashMode === FlashMode.auto ? (
              <View style={styles.autoFlashIcon}>
                <Text style={styles.autoText}>A </Text>
                <Icon name='bolt' size={30} color='yellow' />
              </View>
            ) : (
              <Icon name={getFlashIcon()} size={40} color={flashMode === FlashMode.on ? "yellow" : "white"} />
            )}
          </TouchableOpacity>
        </View>
      </Camera>
      ):(
        <Text>Cargando cámara</Text>// Mostrar un mensaje mientras se activa la cámara
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  ButtonRow: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    width: '100%',
    marginBottom: 5,
    marginTop: 5,
  },
  autoFlashIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  autoText: {
    fontSize: 18,
    color: 'yellow',
    marginLeft: -12,
    fontWeight: 'bold',
  },
});
