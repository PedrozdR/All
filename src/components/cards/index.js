//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class Card extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={{flexDirection: 'row',justifyContent: 'center',}}>
                    <View style={styles.cardContent}>
                        <Icon name="home" size={42} style={styles.icon} />
                        <Text style={styles.cardTitle}>Home</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Card;
