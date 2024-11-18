import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/screens/Main';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import RecyclingRecords from './src/screens/RecyclingRecords';
import RecyclingRecordsList from './src/screens/RecyclingRecordsList';
import MainMenu from './src/screens/MainMenu';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text } from 'react-native';
import AboutUs from './src/screens/AboutUs';
import strings from './src/util/strings';
import Statistics from './src/screens/Statistics'; 
import Camera from './src/screens/Camera';
import PhotoPreview from './src/screens/PhotoPreview';


SplashScreen.preventAutoHideAsync();

export default function App() {
  
  const [loaded, error] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const AuthStack = createStackNavigator();
  const AppStack = createStackNavigator();
  const RootStack = createStackNavigator();

  // Stack para autenticación
  function AuthNavigator() {
    return (
      <AuthStack.Navigator screenOptions={stackScreenOptions}>
        <AuthStack.Screen name="Main" component={Main} options={{ headerShown: false, title: 'Main' }} />
        <AuthStack.Screen name="Register" component={Register} options={{ title: strings.register }} />
        <AuthStack.Screen name="Login" component={Login} options={{ title: strings.login }} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={styles.headerTitle}>{strings.recover}{'\n'}{strings.password}</Text>
          ),
        }} />
      </AuthStack.Navigator>
    );
  }

  // Stack para la aplicación después de la autenticación
  function AppNavigator() {
    return (
      <AppStack.Navigator screenOptions={stackScreenOptions}>
        <AppStack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: true, title: strings.mainMenu }} />
        <AppStack.Screen name="RecyclingRecords" component={RecyclingRecords} options={{ title: strings.recyclingRecord }} />
        <AppStack.Screen name="RecyclingRecordsList" component={RecyclingRecordsList} options={{ title: strings.recyclingRecordList }} />
        <AppStack.Screen name="AboutAs" component={AboutUs} options={{title: strings.AboutUs}}/>
        <AppStack.Screen name="Statistics" component={Statistics} options={{headerShow: true, title: strings.statistics}}/>
        <AppStack.Screen name='Camera' component={Camera} options={{title: strings.camera}}/>
        <AppStack.Screen name='PhotoPreview' component={PhotoPreview} options={{title: strings.PhotoPreview}}/>
      </AppStack.Navigator>
    );
  }

  // Navegador principal que combina ambos stacks
  function RootNavigator() {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Auth" component={AuthNavigator} />
            <RootStack.Screen name="App" component={AppNavigator} />
        </RootStack.Navigator>
    );
}

  return (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
  );
}

const stackScreenOptions = {
  headerTransparent: true,
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Comfortaa',
    fontSize: 22,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  headerTitleAlign: 'center',
};

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    fontSize: 22,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    color: '#ffffff',
  },
});


