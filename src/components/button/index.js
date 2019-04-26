//import liraries
import React, { Component } from 'react';
import {Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// create a component
class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                activeOpacity={0.8}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}


//make this component available to the app
export default Button;
