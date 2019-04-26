//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import Button from '../../components/button';

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
                    <View style={styles.inputContainer}>
                        <TextInput multiline={true} style={styles.input} placeholder='Oque deseja ser lembrado?' />
                    </View>
                    <TouchableOpacity
                        style={styles.dateContainer}
                        activeOpacity={0.8}
                    >
                        <Icon name='calendar' size={24} style={styles.icon} />

                        <Text style={styles.date}>Sem data</Text>
                    </TouchableOpacity>
                    <Button 
                    label='Adicionar'
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default NewTaskScreen;
