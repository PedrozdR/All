//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class Card extends Component {
    render() {
        return (
            <View
                style={styles.container}
                >
                <View style={styles.topIcons}>
                    <Icon name="home" size={24} style={styles.icon} />
                    <TouchableOpacity
                        activeOpacity={0.4}
                    >
                        <Icon name="ellipsis-v" size={32} style={styles.dots} />
                    </TouchableOpacity>
                </View>
                <View style={styles.infosContainer}>
                    <Text style={styles.cardTitle}>{this.props.title}</Text>
                    <Text style={styles.tasks}>{this.props.qtdTasks} tarefas</Text>
                </View>
                <Text style={styles.dones}>2/4</Text>
            </View>
        );
    }
}

export default Card;
