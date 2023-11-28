import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';
//Importamos los datos del proceso
import { MOVIES } from '../shared/peliculas';

export default function Videoclub() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Videoclub</Text>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {
                            MOVIES.map((peliculas) => (
                                <Card>
                                    <ListItem
                                        bottomDivider
                                        key={peliculas.id}
                                        onPress={() => console.log('Element ' + peliculas.id + ' selected')}
                                    >
                                        <Avatar source={{ uri: peliculas.poster }} />
                                        <ListItem.Content>
                                            <Card.Title>{peliculas.title}</Card.Title>
                                            <Card.Divider />
                                            <Text style={styles.titleText}>Director: {peliculas.director}</Text>
                                            <Text style={styles.titleText}>Año: {peliculas.year}</Text>
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