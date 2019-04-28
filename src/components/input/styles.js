import { StyleSheet,Dimensions } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
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
})

export default styles