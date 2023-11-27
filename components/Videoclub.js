import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Videoclub() {
    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
            <h1> INICIO</h1>
            <p> CONTENIDO DE EJEMPLO</p>
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
