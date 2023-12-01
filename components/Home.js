import { StatusBar } from 'expo-status-bar';
import { Icon, Card, Header } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Inicio</Text>
      <Card>
        <Card.Title>Bienvenido a ¡Videoclub!!</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          iVideoClub es una aplicacion desarrollada con Ionic.
          Para acceder a la gestión del videoclub pulsa el siguiente botón.
        </Text>
        <Button 
          icon={
            <Icon
              name="videocam"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />

          }
          
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Acceso a iVideoClub"
          onPress={() => props.navigation.navigate('Videoclub')}
        />
      </Card>
      <Card>
        <Card.Title>Informacion sobre el autor</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10 }}>
          Aplicacion desarrollada por Antonio M.Pardo Ruiz
        </Text>
        <Button
          icon={
            <Icon
              name="user"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Consultar informacion"
          onPress={() => props.navigation.navigate('Autor')}
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
