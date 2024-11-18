import React from 'react';
import { View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const PAGEWEB = "https://www.redabc.org/"

export default function AboutUs(){
  return (
    <View style={styles.container}>   
        <View style = {styles.topSection}>                
              <View style = {{width: '100%', height: '100%'}}>
                <WebView
                source={{uri: PAGEWEB}}
                  onLoad={console.log ('Loaded!')}
                />
          </View>
        </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },
});
