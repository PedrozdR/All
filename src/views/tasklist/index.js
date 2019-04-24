//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';
import CheckBox from '../../components/checkbox';

// create a component
class TaskListScreen extends Component {

    render() {
        const { task } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{task.name}</Text>
                <View>
                    <CheckBox/>
                </View>
            </View>
        );
    }
}


//make this component available to the app
export default TaskListScreen;
