//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';
import Button from '../../components/button';
import MyInput from '../../components/input';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
class NewListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }
    static navigationOptions = {
        headerTransparent: false,
        headerTitle: 'Nova Lista',
    }
    _onChangeText(text) {
        this.setState({
            inputText: text
        })
    }
    teste() {
        if (this.state.inputText == '') {
            alert('Insira o titulo da sua lista')
        } else {
            alert(this.state.inputText)
        }
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <MyInput
                        multiline={true}
                        placeholder="Digite o título da lista"
                        onChangeText={(text) => this._onChangeText(text)}
                    />
                    <Button
                        label='Adicionar'
                        onPress={() => this.teste()}
                    />
                </ScrollView>
            </SafeAreaView>

        );
    }
}


//make this component available to the app
export default NewListScreen;
