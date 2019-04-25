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
        marginTop: 4,
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
        alignSelf:'center',
        backgroundColor: '#6A5ACD',
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