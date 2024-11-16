import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from '../styles/mainStyles';
import MainMenuButtonStyles from '../styles/MainMenuButtonStyles.js';
import Overlay from '../components/Overlay';
import { handleRegisterRecycling } from '../components/MainMenuButtonHandlers.js';
import strings from '../util/strings.js';
import firebase from '../database/firebase.js'
import { ScrollView } from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';


export default function RecyclingList({ navigation }) {

  const [recycling, setRecycling] = useState([]);

  useEffect(() => {
    firebase.db.collection('recyclingRecords').onSnapshot(querySnapshot => {
      const recyclings = [];

      querySnapshot.docs.forEach(doc  => {
        const {recyclingType, weight, peopleNum, date} = doc.data()
        recyclings.push({
          id: doc.id,
          recyclingType,
          weight,
          peopleNum,
          date
        })
      });
      setRecycling(recyclings)
    });
  }, [])

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
            <ScrollView contentContainerStyle={mainStyles.scrollContent} style={mainStyles.scrollView}>

              {
                recycling.map(recyclinRecord => {
                  return (
                    <ListItem 
                      key = {recyclinRecord.id} bottomDivider
                    >
                      <ListItem.Chevron/>
                      <Avatar
                        rounded
                        size="medium"
                        icon={{ name: 'recycle', type: 'font-awesome', color: '#4CAF50' }}
                        
                      />
                      <ListItem.Content>
                        <ListItem.Title>{strings.date}: {recyclinRecord.date}</ListItem.Title>
                        <ListItem.Subtitle>ID: {recyclinRecord.id}</ListItem.Subtitle>
                        <ListItem.Subtitle>{strings.weight}: {recyclinRecord.weight}</ListItem.Subtitle>
                        <ListItem.Subtitle>{strings.number_of_people}: {recyclinRecord.peopleNum}</ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  )
                })
              }

            </ScrollView>

            </View>

        </ImageBackground>
      </View>

      {/* Sección inferior con botón */}
      <View style={mainStyles.bottomWhiteSection}>
        <TouchableOpacity 
            style={[MainMenuButtonStyles.button, MainMenuButtonStyles.buttonStyle]}
            onPress={() => handleRegisterRecycling(navigation)}
            >
            <Text style={MainMenuButtonStyles.buttonText}>{strings.registerRecycling}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




