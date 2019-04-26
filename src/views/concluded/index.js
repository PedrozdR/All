//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

// create a component
class ConcludedScreen extends Component {
    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Tarefas Concluidas',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>concludedScreen</Text>
            </View>
        );
    }
}


//make this component available to the app
export default ConcludedScreen;
