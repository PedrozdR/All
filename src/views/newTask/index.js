//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView,TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a component
class NewTaskScreen extends Component {
    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Nova Tarefa'
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <TextInput multiline={true} style={styles.input} placeholder='Oque deseja ser lembrado?' />
                    <View style={styles.task}> 
                        <Icon name='calendar' size={24} style={styles.icon} />
                    </View>
                </ScrollView>
                <TouchableOpacity>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default NewTaskScreen;
