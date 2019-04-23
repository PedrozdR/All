import {StyleSheet,Dimensions} from 'react-native';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';


const styles = StyleSheet.create({
    container:{
        position: 'relative',
        height: Dimensions.get("window").height-340,
        width: Dimensions.get("window").width-150,
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
    },
    topIcons:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    icon:{
        // position: 'absolute',
        // left:18,
        // top: 10,
        borderWidth: 1,
        borderRadius:20,
        margin: 8,
        padding: 8,
    },
    dots:{
        padding:8
    }, 
    infosContainer:{
        width: 200,
        position: 'absolute',
        left:18,
        bottom:32,
    },
    cardTitle:{
        fontSize:28,
    },
    tasks:{
        color:colors.regular
    },
    dones:{
        position: 'absolute',
        bottom:10,
        right: 10
    }
})

export default styles