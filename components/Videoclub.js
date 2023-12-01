
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';
//Importamos los datos del proceso
import { MOVIES } from '../shared/peliculas';
import { CONFIG } from '../shared/config';

export default class Videoclub extends React.Component {

    //Definimos el constructor.

    constructor(props){
        super(props);
        this.state = {
            peliculas:[],
            isLoading:false,
            error:false
        };
    }
    //Utilizamos esta opcion para la carga de datos sin utilizar el constructor.
    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        try {
          let response = await fetch(CONFIG.baseUrl + "/catalog");
          let data = await response.json();
          console.log(data);
          this.setState({ peliculas: data, isLoading: false });
        } catch (error) {
          console.log(error);
          this.setState({ error: error, isLoading: false });
        }
      }

      render() {
        //Generamos las variables de estado que cambian a lo largo del ciclo de la pagina.
        const { peliculas, error, isLoading } = this.state;

        if (error)
            return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>{error.message}</Text></View>;

        if (isLoading)
                return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} ><Text>Loading...</Text></View>;
            
                return (
                    <View style={styles.container}>
                        <Text style={styles.titleText}>Videoclub</Text>
                        <SafeAreaProvider>
                        <SafeAreaView style={styles.container}>
                            <ScrollView>
                                {
                                    peliculas.map((pelicula) => (
                                    <Card>
                                        <ListItem
                                          bottomDivider
                                          key={pelicula.id}
                                          onPress={() => console.log('Element ' + pelicula.id + ' selected')}
                                    >
                                         <Avatar source={{ uri: pelicula.poster }} />
                                           <ListItem.Content>
                                             <Card.Title>{pelicula.title}</Card.Title>
                                             <Card.Divider />
                                             <Text style={styles.titleText}>Director: {pelicula.director}</Text>
                                             <Text style={styles.titleText}>Año: {pelicula.year}</Text>
                                          </ListItem.Content>
                                        <ListItem.Chevron />
                                    </ListItem>
                                </Card>
                            ))
                        }
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </View >
      );
  }
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