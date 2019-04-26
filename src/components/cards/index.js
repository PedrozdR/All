//import liraries
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class Card extends PureComponent {
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
