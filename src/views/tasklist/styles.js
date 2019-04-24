import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
        position: 'relative'
    },
    title:{
        alignSelf: 'center',
        fontSize: 34,
        marginTop: 12,
        fontWeight: 'bold',
    },
    taskContent:{
        flexDirection: 'row',
    },
    task:{
        flexDirection:'column',
        fontSize:18,
        alignSelf:'center'
    },
    addContainer:{
        position: 'absolute',
        bottom:32,
        right: 32,
    }
})

export default styles