//import liraries
import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import Button from '../../../components/button';
import styles from './styles';

// create a component
class EditCardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: ''
        }
    }
    static navigationOptions = {
        title: 'Editar Lista',
        headerRight: (
            <TouchableOpacity
            onPress={()=>{alert("Lista exluida !")}}
                activeOpacity={0.8}
            >
                <Icon name='trash' size={24} style={styles.deleteIcon} />
            </TouchableOpacity>
        )
    }


    _onChange(text) {
        this.setState({
            editText: text
        })
    }


    render() {

        const { task } = this.props.navigation.state.params

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(text) => this._onChange(text)}
                            multiline={true}
                            style={styles.input}
                            placeholder='Atualizar lista'
                        />
                    </View>
                    <Button
                        onPress={() => {
                            console.warn(this.state.editText);

                        }}
                        label='Editar'
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default EditCardScreen;
