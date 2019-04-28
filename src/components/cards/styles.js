import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: Dimensions.get("window").height - 390,
        width: Dimensions.get("window").width - 170,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingTop: 32,
    },
    infosContainer: {
        marginTop: 30,
        marginLeft: 18

    },
    cardTitle: {
        fontSize: 22,
    },
    tasks: {
        color: colors.regular
    },
    editIcon:{
        color: colors.primary,
        padding:8,
        position: 'absolute',
        right: 10,
        bottom:8
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
        borderColor: colors.primary,
        width: 160,
        height: 160,
        borderRadius: 100
    },
    dones: {
        alignSelf: 'center',
        fontSize: 40,
        color: colors.primary
    }
})

export default styles