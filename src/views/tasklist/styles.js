import {StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
    navigaionTitle:{
        fontSize: 28,
        color: colors.primary
    },
    container:{
        flex:1,
        position: 'relative'
    },
    title:{
        alignSelf: 'center',
        fontSize: 34,
        marginTop: 4,
        fontWeight: 'bold',
    },
    addContainer:{
        alignSelf:'center',
        backgroundColor: colors.primary,
        borderRadius: 24,
        position: 'absolute',
        bottom: 32
    },
    buttonText:{
        padding: 18,
        color: '#fff',
        fontWeight:'bold'
    }
})

export default styles