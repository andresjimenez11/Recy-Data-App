import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/screens/Main';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import ResetPassword from './src/screens/ResetPassword';
import Home from './src/screens/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text } from 'react-native';


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

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff', // Íconos blancos para mayor contraste
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontFamily: 'Comfortaa', // Cambia por tu fuente
          fontSize: 22,
          fontWeight: 'normal',
          color: '#ffffff',
        },
        headerTitleAlign: 'center', // Alinea el título al centro
      }}>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false, title: 'Main' }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: true, title: 'Registro'}}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inicio de sesión' }}/>
        <Stack.Screen name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: true,
            headerTitle: () => (
              <Text style={styles.headerTitle}>Recuperar{'\n'}contraseña</Text>
            ),
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flex: 1,
    fontSize: 22, // Ajusta el tamaño según sea necesario
    flexWrap: 'wrap', // Permite que el texto se ajuste a múltiples líneas
    textAlign: 'center', // Centra el texto
    fontFamily: 'Comfortaa',
    color: '#ffffff',
  },
});


