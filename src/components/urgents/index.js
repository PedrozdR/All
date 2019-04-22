//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class Urgents extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Icon name='home' size={24} />
                    <View style={styles.infosContainer}>
                        <Text style={styles.toDoInfo}>Teste</Text>
                        <Text style={styles.toDoDate}>Data</Text>
                    </View>
            </View>
        );
    }
}


//make this component available to the app
export default Urgents;
