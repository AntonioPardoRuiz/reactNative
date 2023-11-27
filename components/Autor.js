import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

//Informacion del proceso 
const DATA = [
  {
    title: 'Informacion',
    data: ['Curriculum Vitae', 'Correo:email@email.com', 'Twitter:@twitter', 'Telefono:99988877'],
    icon: ['book','mail','twitter','phone']
  },
];

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
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Icon name={item.icon} color="#ffffff" size={20} iconStyle={{ marginRight: 10 }}/>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
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
