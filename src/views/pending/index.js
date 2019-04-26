//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
                <Text>PendingScreen</Text>
            </View>
        );
    }
}


//make this component available to the app
export default PendingScreen;
