//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

//My Components
import CheckBox from '../checkbox';

import styles from './styles';

// create a component
class Tasks extends Component {
    render() {
        return (
            <View style={styles.taskContent}>
                <CheckBox />
                <TouchableOpacity
                {...this.props}
                activeOpacity={0.7}
                >
                    <Text style={styles.task}>{this.props.task}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


//make this component available to the app
export default Tasks;
