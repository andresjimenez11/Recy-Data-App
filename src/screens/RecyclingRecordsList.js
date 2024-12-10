import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../database/firebase.js';
import strings from '../util/strings.js';
import mainStyles from '../styles/mainStyles';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay';
import { handleRegisterRecycling } from '../components/MainMenuButtonHandlers.js';

export default function RecyclingList({ navigation, route }) {
  const { userId } = route.params;
  
  const [recycling, setRecycling] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos de reciclaje
  const fetchData = async () => {
    try {
      // Filtrar los documentos por el userId
      const querySnapshot = await firebase.db
        .collection('recyclingRecords')
        .where('userId', '==', userId) // Filtramos por userId
        .get();

      const recyclings = [];
      querySnapshot.docs.forEach(doc => {
        const { recyclingType, weight, peopleNum, date } = doc.data();
        recyclings.push({
          id: doc.id,
          recyclingType,
          weight,
          peopleNum,
          date,
          userId
        });
      });
      setRecycling(recyclings);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar los datos cuando el componente se monta o cuando cambia el userId
  useEffect(() => {
    console.log('User ID received in RecyclingList:', userId);
    fetchData(); // Llamar a la función para obtener los datos
  }, [userId]); // Dependencia en el userId para recargar los datos si cambia

  // Función para mapear tipos de reciclaje a sus descripciones
  const getRecyclingTypeLabel = type => {
    switch (type) {
      case 1:
        return strings.inorganicRecycling; // "Aprovechamiento inorganico"
      case 2:
        return strings.unusableWasteDisposal; // "Disposición inservible"
      case 3:
        return strings.organicRecycling; // "Aprovechamiento orgánico"
      default:
        return strings.unknownType; // "Tipo desconocido" o cualquier valor predeterminado
    }
  };

  // Añadir un listener para cuando regreses de la pantalla de registro de reciclaje
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Este evento se dispara cada vez que la pantalla se vuelve visible (por ejemplo, después de registrar un reciclaje)
      fetchData(); // Refrescar los datos cuando la pantalla sea visible
    });

    return unsubscribe; // Limpiar el listener cuando el componente se desmonte
  }, [navigation]);

  return (
    <View style={mainStyles.container}>
      {/* Contenedor superior con imagen de fondo */}
      <View style={mainStyles.topSection}>
        <ImageBackground 
          source={require('../../assets/images/background.jpg')} 
          style={mainStyles.background}
        >
          <Overlay />

          <View style={mainStyles.scrollViewContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : recycling.length === 0 ? (
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                {strings.noRecords}
              </Text>
            ) : (
              <ScrollView contentContainerStyle={mainStyles.scrollContent} style={mainStyles.scrollView}>
                {recycling.map(recyclinRecord => {
                  return (
                    <ListItem key={recyclinRecord.id} bottomDivider>
                      <Avatar
                        rounded
                        size="medium"
                        icon={{ name: 'recycle', type: 'font-awesome', color: '#4CAF50' }}                        
                      />
                      <ListItem.Content>
                        <ListItem.Title>{strings.date}: {recyclinRecord.date}</ListItem.Title>
                        <ListItem.Subtitle>ID Usuario: {recyclinRecord.userId}</ListItem.Subtitle>
                        <ListItem.Subtitle>ID: {recyclinRecord.id}</ListItem.Subtitle>
                        <ListItem.Subtitle>{strings.weight}: {recyclinRecord.weight}</ListItem.Subtitle>
                        <ListItem.Subtitle>{strings.number_of_people}: {recyclinRecord.peopleNum}</ListItem.Subtitle>
                        <ListItem.Subtitle>{strings.type}: {getRecyclingTypeLabel(recyclinRecord.recyclingType)}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </ImageBackground>
      </View>

      {/* Sección inferior con botón */}
      <View style={mainStyles.bottomWhiteSection}>
        <TouchableOpacity 
          style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
          onPress={() => handleRegisterRecycling(navigation, userId)}
        >
          <Text style={MainMenuButtonStyles.buttonText}>{strings.registerRecycling}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
