import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: Dimensions.get("window").height - 340,
        width: Dimensions.get("window").width - 150,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingTop: 32,
    },
    infosContainer: {
        margin: 18
    },
    cardTitle: {
        fontSize: 28,
    },
    tasks: {
        color: colors.regular
    },
    donesContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    Circle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#000',
        width: 200,
        height: 200,
        borderRadius: 100
    },
    dones: {
        alignSelf: 'center',
        fontSize: 40,
    }
})

export default styles