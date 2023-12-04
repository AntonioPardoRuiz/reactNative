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

export default function Curriculum() {
    return (
        <View style={styles.container}>
        <Card>
        <ListItem>
          <Card.Title>2010-Actualidad</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Profesor del Máster Universitario de Desarrollo de Software para dispositivos
            moviles
          </Text>
        </ListItem>
        </Card>
        <Card>
        <ListItem>
          <Card.Title>2015-Actualidad</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Profesor del Máster Universitario de Desarrollo de Software para dispositivos
            móviles.
          </Text>
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
});
