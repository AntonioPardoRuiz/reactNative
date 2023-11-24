import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon
        name="md-information-circle-outline"
        type="ionicon"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title={'Boton' + 'de' + 'Ayuda'}
        onPress={() => console.log('Botón pulsado')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
