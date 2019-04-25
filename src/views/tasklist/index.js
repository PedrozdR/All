//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';
import CheckBox from '../../components/checkbox';

// create a component
class TaskListScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    task: 'Ver everton fidar no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ver everton fidar no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ver everton fidar no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ver everton fidar no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Ver everton fidar no lolzinho',
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
                    contentContainerStyle={{ padding: 12 }}
                    keyExtractor={(item, index) => {
                        return `${index}`
                    }}
                    ItemSeparatorComponent={() => (
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#dedede' }} />
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
                <TouchableOpacity
                    style={styles.addContainer}
                    activeOpacity={0.8}
                    onPress={() => this.props.navigation.navigate('NewT')}
                >
                    <Text style={styles.buttonText}>Adicionar nova tarefa</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


//make this component available to the app
export default TaskListScreen;
