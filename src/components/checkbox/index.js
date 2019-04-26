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
            <View style={styles.container}>
                <TouchableOpacity
                    {...this.props}
                    activeOpacity={0.8}
                    onPress={() => this.check()}
                >
                    <Icon name={this.state.isChecked == false ? 'circle' : 'check-circle'}  size={26} color='#6A5ACD' style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }
}
//make this component available to the app
export default CheckBox;
