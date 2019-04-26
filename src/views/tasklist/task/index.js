//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import Button from '../../../components/button';
import styles from './styles';

// create a component
class TaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static navigationOptions = {
        title: 'Editar tarefa'
    }


    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            multiline={true}
                            style={styles.input}
                            placeholder='Oque deseja ser lembrado?'
                            value={({navigation})=>{
                                navigation.getParams("data").task
                            }}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.dateContainer}
                        activeOpacity={0.8}
                    >
                        <Icon name='calendar' size={24} style={styles.icon} />

                        <Text style={styles.date}>Sem data</Text>
                    </TouchableOpacity>
                    <Button
                        label='Editar'
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default TaskScreen;
