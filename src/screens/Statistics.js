import React from 'react';
import { View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const PAGEWEB = "https://app.powerbi.com/view?r=eyJrIjoiOWQ2OTIyMTEtMDI0ZS00MDcwLTlhN2UtMzFjMDZjNmU0MTBkIiwidCI6ImI0OWRiNjI0LTI1NDYtNDI1OS1iZjM2LTE5OWM2ZTk4ODAzMyIsImMiOjR9"

export default function Statistics(){
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

