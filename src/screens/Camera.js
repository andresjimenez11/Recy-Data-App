import {CameraView, useCameraPermissions, Camera} from 'expo-camera';
import { CameraType, FlashMode } from 'expo-camera/legacy';
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import strings from '../util/strings';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CameraScreen (){
    const [facing, setFacing] = useState(CameraType.back);
    const [permission, requestPermission] = useCameraPermissions();
    const [flashMode, setFlashMode] = useState(FlashMode.off);

    if (!permission){
        return <View/>
    }

  
    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={styles.message}>{strings.camera_permission_request}</Text>
              <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

    function toggleCameraFacing(){
        setFacing(current => (current == 'back' ? 'front' : 'back'));
    }

    function toggleFlashMode(){
      setFlashMode(current => 
        current === FlashMode.off ? FlashMode.on:
        current === FlashMode.on ? FlashMode.auto: FlashMode.off
      );
    }

    function getFlashIcon(){
      if(flashMode === FlashMode.off) return 'bolt';
      if(flashMode === FlashMode.on) return 'bolt';
      if(flashMode === FlashMode.auto) return 'bolt';
    }

    return(
        <View style={styles.container}>
            <CameraView style= {styles.camera} facing={facing} flashMode = {flashMode}>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Icon name='refresh' size={40} color={"white"}></Icon>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Icon name='camera' size={40} color={"white"}></Icon>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
                      {flashMode === FlashMode.auto ? (
                        <View style= {styles.autoFlashIcon}>
                          <Text style= {styles.autoText}>A  </Text>
                          <Icon name='bolt' size={30} color={'yellow'} />
                          
                        </View>
                      ):(
                        <Icon name={getFlashIcon()} size={40} color={flashMode === FlashMode.on ? "yellow" : "white"}></Icon>
                        )}
                    </TouchableOpacity>
                </View>
            </CameraView>
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
    ButtonRow:{
      flexDirection: 'row',
      flex: 1,
      padding: 5, // Espacio entre botones
      width: '100%', // Ajusta el ancho de la fila
      marginBottom:5, // Espacio entre las imágenes y el botón
      marginTop: 5, // Ajusta este valor para mover los botones hacia arriba
     },

     autoFlashIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    autoText: {
        fontSize: 18,
        color: 'yellow',
        marginLeft: -12, // Slight overlap to place the 'A' near the bolt
        fontWeight: 'bold',
    },
  });
