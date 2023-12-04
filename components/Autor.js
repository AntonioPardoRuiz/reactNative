import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Avatar, } from '@rneui/themed';
import {
  IdcardOutlined,
  SendOutlined,
  TwitterOutlined,
  PhoneOutlined
} from '@ant-design/icons';

//Informacion del proceso
export default function Autor(props) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Informacion</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Aplicacion desarrollada por Antonio M.Pardo Ruiz. A continuacion
          puede consultar mas informacion sobre el autor.
        </Text>
        <ListItem>
          <Button type="clear"
            icon={
              <IdcardOutlined/>
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Curriculum"
            onPress={() => props.navigation.navigate('Curriculum')}
          />
        </ListItem>
        <ListItem>
          <SendOutlined />
          <ListItem.Content>
            <ListItem.Title>Correo:email@email.com</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <TwitterOutlined />
          <ListItem.Content>
            <ListItem.Title>Twitter:@twitter</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <PhoneOutlined />
          <ListItem.Content>
            <ListItem.Title>Telefono:999888777</ListItem.Title>
          </ListItem.Content>
        </ListItem>
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
