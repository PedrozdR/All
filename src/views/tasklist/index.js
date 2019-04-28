//import liraries
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';
import Tasks from '../../components/tasks';

// create a component
class TaskListScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <Text style={styles.navigaionTitle}>{navigation.getParam("task").name}</Text>
            )
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    task: 'Ver everton fidar no lolzinho',
                    done: Boolean
                },
                {
                    task: 'Carregar rafael no lolzin',
                    done: Boolean
                },
                {
                    task: 'Ver Rafael dar firstblood',
                    done: Boolean
                },
                {
                    task: 'Ver Renan dar pentakill',
                    done: Boolean
                },
                {
                    task: 'Ver lari perder pra Rafa no x1 oakwpdkaopwdkaowkdpokawopdkaopwkdopakwd',
                    done: Boolean
                },
            ]
        }
    }

    taskDetails = (item) => {
        this.props.navigation.navigate("Task", { data: item })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    contentContainerStyle={{ padding: 12 }}
                    keyExtractor={(item, index) => {
                        return `${index}`
                    }}
                    ItemSeparatorComponent={() => (
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#dedede' }} />
                    )
                    }
                    renderItem={({ item }) => (
                        <Tasks
                            onPress={() => this.taskDetails()}
                            task={item.task}
                        />
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
