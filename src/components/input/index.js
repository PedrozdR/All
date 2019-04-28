//import liraries
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

// create a component
class MyInput extends Component {
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                {...this.props}
                style={styles.input} />
            </View>
        );
    }
}

//make this component available to the app
export default MyInput;
