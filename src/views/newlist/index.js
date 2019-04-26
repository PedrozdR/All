//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';
import Button from '../../components/button';

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
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => this._onChangeText(text)} multiline={true} style={styles.input} placeholder='Digite o título da lista' />
                </View>
                <Button
                    label='Adicionar'
                    onPress={() => this.teste()}
                />
            </SafeAreaView>

        );
    }
}


//make this component available to the app
export default NewListScreen;
