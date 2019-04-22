import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#f1f1f1',
        padding: 8,
        marginLeft:28,
        width: Dimensions.get('window').width-54,
        borderRadius: 4,
    },
    infosContainer:{
        marginLeft:14
    },
    toDoInfo:{
        fontSize:20
    },
    toDoDate:{
        fontSize:12,
        marginTop: 4,
    }
})

export default styles