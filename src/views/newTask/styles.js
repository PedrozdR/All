import { StyleSheet,Dimensions } from 'react-native';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    input:{
        fontSize:24,
        padding: 18,
        marginTop: 12,
        alignSelf:'center',
        backgroundColor: '#dedede',
        width: Dimensions.get('window').width-32,
        height: Dimensions.get('window').height-520,
        borderRadius: 10,
    },
    task:{
        margin:18
    },
    icon:{
        color: colors.primary
    }
})

export default styles