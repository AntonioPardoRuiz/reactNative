import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Avatar } from '@rneui/themed';
//Importamos los datos del proceso
import { AUTORES } from '../shared/autores';

//Informacion del proceso

export default function Autor() {
  return (
    <View style={styles.container}>

      <Text>Autor</Text>
      <Card>
        <Card.Title>Informacion</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Aplicacion desarrollada por Antonio M.Pardo Ruiz. A continuacion
          puede consultar mas informacion sobre el autor.
        </Text>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <ScrollView>
              {
                AUTORES.map((autores) => (
                  <ListItem
                    bottomDivider
                    key={autores.id}
                    onPress={() => console.log('Element ' + product.id + ' selected')}
                  >
                    <Avatar source={{ uri: product.image }} />
                    <ListItem.Content>
                      <ListItem.Title>{product.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))
              }
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
      </Card>
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
