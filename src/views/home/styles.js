import { StyleSheet,Dimensions } from 'react-native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    userContainer: {
        marginTop: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.light,
    },
    username: {
        marginTop: 10,
        fontSize: fonts.big,
        marginBottom: 15
    },
    todoTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 18,
        marginTop: 34,
        marginBottom: 18,
    },
    taskContainer:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        borderBottomWidth:1,
        borderBottomColor:colors.light
    },
    count:{
        alignSelf: 'center',
        fontSize:24,
        marginTop:8
    },
    taskText:{
        fontSize:12,
        marginBottom:8
    },
    plusIcon:{
        marginRight: 25,
        padding: 12,
    },
    listContainer:{
        width: Dimensions.get('window').width,
    }
})

export default styles