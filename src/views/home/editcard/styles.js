import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const styles = StyleSheet.create({
    deleteIcon: {
        color: colors.primary,
        marginRight: 20,
    },
    container: {
        flex: 1,
    },
    inputContainer: {
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        width: Dimensions.get('window').width - 32,
    },
    input: {
        fontSize: 24,
        paddingLeft: 8,
        paddingBottom: 8,
        marginTop: 12,
    },
    icon: {
        color: colors.primary
    },
    dateContainer: {
        flexDirection: 'row',
        margin: 18,
    },
    date: {
        color: colors.light,
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 8,
    },
    addTask: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: 14,
        width: 170,

    },
    buttonText: {
        alignSelf: 'center',
        color: colors.white,
        fontSize: 18,
        padding: 14,
    }
})

export default styles