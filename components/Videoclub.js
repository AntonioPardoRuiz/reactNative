
import React from "react";
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Icon, Card, Header,ListItem,Avatar } from '@rneui/themed';
//Importamos los datos del proceso
import { CONFIG } from '../shared/config';

export default class Videoclub extends React.Component {

    //Definimos el constructor.

    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: false,
            error: false
        };

        this.loadData();
    }
    //Utilizamos esta opcion para la carga de datos sin utilizar el constructor.
    //componentDidMount() {
    //   
   // }

    async loadData() {
        try {
            this.setState({ isLoading: true });
            let response = await fetch(CONFIG.baseUrl);
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
            <ScrollView>
            {
              peliculas.map((pelicula) => (
                <ListItem
                  bottomDivider
                  key={pelicula.id}
                  onPress={() => console.log('Element ' + pelicula.id + ' selected')}
                >
                  <Avatar source={{ uri:pelicula.poster }} />
                  <ListItem.Content>
                    <ListItem.Title>{pelicula.title}</ListItem.Title>
                    <ListItem.Title>Director: {pelicula.director}</ListItem.Title>
                    <ListItem.Title>Año: {pelicula.year}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </ScrollView>

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