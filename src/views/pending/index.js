//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from './styles';

// create a component
class PendingScreen extends Component {
    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Tarefas Pendentes',
    }
    render() {
        return (
            <View style={styles.container}>
                <Calendar />
            </View>
        );
    }
}


//make this component available to the app
export default PendingScreen;
