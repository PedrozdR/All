//import liraries
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

// create a PureComponent
class CheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }
    check() {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    render() {
        return (
                <TouchableOpacity
                    {...this.props}
                    activeOpacity={0.8}
                    onPress={() => this.check()}
                    style={styles.container}
                >
                    <Icon name={this.state.isChecked == false ? 'circle' : 'check-circle'}  size={26} style={styles.icon} />
                </TouchableOpacity>
       
        );
    }
}
//make this component available to the app
export default CheckBox;
