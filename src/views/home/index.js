//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

//My Components
import Card from '../../components/cards';
import styles from './styles';


// create a component
class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Faculdade',
                    qtdT: 12,
                },
                {
                    name: 'Trabalho',
                    qtdT: 13
                }
            ]
        }
    }
    onPressItem = (item) => {
        this.props.navigation.navigate('TaskList', { task: item })
    }
    editCard = (item) =>{
        this.props.navigation.navigate('EditCard', {task: item})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={require('../../../assets/everton.jpg')} />
                    </View>
                    <Text style={styles.username}>Everton Mateus</Text>
                </View>

                <View style={styles.taskContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate("Pending")}
                    >
                        <Text style={styles.count}>50</Text>
                        <Text style={styles.taskText}>Tarefas Pendentes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate("Concluded")}
                    >
                        <Text style={styles.count}>30</Text>
                        <Text style={styles.taskText}>Tarefas Concluidas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.todoListContainer}>
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
                            activeOpacity={0.9}
                            onPress={() => this.onPressItem(item)}
                        >
                            <Card
                                title={item.name}
                                qtdTasks={item.qtdT}
                                onPress={()=> this.editCard(item)}
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
                    <Icon name='plus' size={22} color='#f1f1f1' style={styles.icon} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
export default HomeScreen;