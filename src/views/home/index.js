//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import Card from '../../components/cards';
import styles from './styles';


// create a component
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            data: [
                {
                    name: 'Faculdade',
                    qtdT: 12,
                    tasks: [
                        {
                            taskTitle: 'Meu ovo',
                            done: Boolean,
                            dueDate: Date
                        }
                    ]
                },
                {
                    name: 'Trabalho',
                    qtdT: 13
                }
            ]
        }
    }
    onPressItem = (item) => {
        this.props.navigation.navigate('Task', { task: item })
    }

    showModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userContainer}>
                    <View style={{ width: 80, height: 80, borderRadius: 40, borderColor: '#f1f1f1', borderWidth: 2, overflow: 'hidden' }}>
                        <Image style={{ alignSelf: 'center', width: 80, height: 80, }} source={require('../../../assets/everton.jpg')} />
                    </View>
                    <Text style={styles.username}>Everton Mateus</Text>
                </View>

                <View style={styles.taskContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate("Created")}
                    >
                        <Text style={styles.count}>50</Text>
                        <Text style={styles.taskText}>Tarefas criadas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate("Concluded")}
                    >
                        <Text style={styles.count}>30</Text>
                        <Text style={styles.taskText}>Tarefas Concluidas</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.todoTitle}>Lista de Atividades</Text>
                </View>
                <FlatList
                    style={styles.listContainer}
                    horizontal={true}
                    data={this.state.data}
                    keyExtractor={(item, index) => {
                        return `${index}`
                    }}
                    ItemSeparatorComponent={() => (
                        <View style={{ padding: 14 }} />
                    )
                    }
                    contentContainerStyle={styles.containerList}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => this.onPressItem(item)}
                        >
                            <Card
                                title={item.name}
                                qtdTasks={item.qtdT}
                            />

                        </TouchableOpacity>
                    )}
                >
                </FlatList>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.newListContainer}
                    onPress={() => {
                        this.props.navigation.navigate("NewL")
                    }}
                >
                    <Icon name='plus' size={22} color='#f1f1f1' style={styles.icon}/>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
export default HomeScreen;