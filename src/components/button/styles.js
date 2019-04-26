import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: 14,
        width: 170,
        marginTop: 24
    },
    buttonText: {
        alignSelf: 'center',
        color: colors.white,
        fontSize: 18,
        padding: 14,
    }
})

export default styles