//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// create a component
class CreatedScreen extends Component {
    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Tarefas Criadas',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>CreatedScreen</Text>
            </View>
        );
    }
}


//make this component available to the app
export default CreatedScreen;
