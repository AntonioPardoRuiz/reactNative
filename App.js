//Importamos las librerias de navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Importamos los componentes.
import Autor from '../myApp/components/Autor';
import Curriculum from '../myApp/components/Curriculum';
import Home from '../myApp/components/Home';
import Videoclub from '../myApp/components/Videoclub';
//Otros componentes de RNEUI
import { StatusBar } from 'expo-status-bar';
import { Icon, Card, Header } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';

//Definimos el stack de navegacion. 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0D92F4'
          }
        }}>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Autor" component={Autor} />
        <Stack.Screen name="Curriculum" component={Curriculum} />
        <Stack.Screen name="Videoclub" component={Videoclub} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


