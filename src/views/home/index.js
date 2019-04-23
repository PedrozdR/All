//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import Card from '../../components/cards';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Urgents from '../../components/urgents';

// create a component
class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Home'
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.userContainer}>
                    <View style={{ backgroundColor: '#000', padding: 20, width: 60, height: 60, borderRadius: 40 }}></View>
                    <Text style={styles.username}>Usuario Default</Text>
                </View>

                <View style={styles.taskContainer}>
                    <View>
                        <Text style={styles.count}>50</Text>
                        <Text style={styles.taskText}>Tarefas criadas</Text>
                    </View>
                    <View>
                        <Text style={styles.count}>30</Text>
                        <Text style={styles.taskText}>Tarefas Concluidas</Text>
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.todoTitle}>Afazeres</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <Card />
                    </ScrollView>
                </View>
{/* 
                <View style={{ flex: 1 }}>
                    <Text style={styles.urgent}>Urgentes</Text>
                    <ScrollView>
                        <Urgents />
                    </ScrollView>
                </View> */}

            </SafeAreaView>
        );
    }
}
export default HomeScreen;