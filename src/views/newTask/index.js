//import liraries
import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, View, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from '@expo/vector-icons/FontAwesome';


//MyComponents
import Button from '../../components/button';
import MyInput from '../../components/input';
import colors from '../../utils/colors';
import styles from './styles';

// create a component
class NewTaskScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: '',
            showCalendar: false,
            date:'Sem data'
        }
    }

    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Nova Tarefa'
    }

    _onChangeText = (text) => {
        this.setState({
            newTask: text
        })
    }

    _onSubmit() {
        if (this.state.newTask == "") {
            alert("Digite qual é sua tarefa !")
        } else {
            console.warn(this.state.newTask);

        }
    }

    showCalendar() {
        this.setState({
            showCalendar: true
        })
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <MyInput
                        multiline={true}
                        style={styles.input}
                        placeholder='O que deseja ser lembrado?'
                        onChangeText={(text) => this._onChangeText(text)}
                    />
                    <TouchableOpacity
                        style={styles.dateContainer}
                        activeOpacity={0.8}
                        onPress={() => {
                            this.showCalendar();
                        }}
                    >
                        <Icon name='calendar' size={24} style={styles.icon} />

                        <Text style={styles.date}>{this.state.date}</Text>
                    </TouchableOpacity>
                    {this.state.showCalendar &&
                        (
                            <Modal
                                visible={true}
                                transparent={this.state.showCalendar}
                                style={{ backgroundColor: '#000', }}
                            >
                                <View>
                                    <Calendar
                                        style={{ alignSelf: 'center', marginTop: 180, }}
                                        onDayPress={(day)=>{
                                            console.warn(day);
                                            
                                            this.setState({
                                                showCalendar:false,
                                                date:day.dateString
                                            })
                                        }}
                                        theme={{
                                            arrowColor: colors.primary,
                                            todayTextColor:colors.primary
                                        }}
                                    />
                                </View>
                            </Modal>
                        )
                    }
                    <Button
                        onPress={() => {
                            this._onSubmit()
                        }}
                        label='Adicionar'
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default NewTaskScreen;
