//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class Card extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.donesContainer}>
                    <View style={styles.Circle}>
                        <Text style={styles.dones}>2/4</Text>
                    </View>
                </View>
                <View style={styles.infosContainer}>
                    <Text style={styles.cardTitle}>{this.props.title}</Text>
                    <Text style={styles.tasks}>{this.props.qtdTasks} tarefas</Text>
                </View>

            </View>
        );
    }
}

export default Card;
