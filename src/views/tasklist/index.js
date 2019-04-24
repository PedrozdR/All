//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';
import CheckBox from '../../components/checkbox';

// create a component
class TaskListScreen extends Component {
    static navigationOptions = {
        headerTransparent: true
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    task: 'Ganhar de rafael no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ganhar de rafael no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ganhar de rafael no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ganhar de rafael no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ganhar de rafael no lolzinho',
                    done: Boolean
                },
            ]
        }
    }

    render() {
        const { task } = this.props.navigation.state.params
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{task.name}</Text>
                <FlatList
                    data={this.state.data}
                    contentContainerStyle={{ padding: 5 }}
                    keyExtractor={(item, index) => {
                        return `${index}`
                    }}
                    ItemSeparatorComponent={() => (
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }} />
                    )
                    }
                    renderItem={({ item }) => (
                        <View style={styles.taskContent}>
                            <CheckBox />
                            <Text style={styles.task}>{item.task}</Text>
                        </View>
                    )}
                >
                </FlatList>
                <TouchableOpacity style={styles.addContainer}>
                    <Icon name='plus-circle' size={40} color='blue' />
                </TouchableOpacity>
            </View>
        );
    }
}


//make this component available to the app
export default TaskListScreen;
