import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
    taskContent:{
        flexDirection: 'row',
        padding: 10,
    },
    task:{
        flex: 1,
        fontSize:18,
        marginLeft: 14,
        width: Dimensions.get('window').width-100,
    },
})

export default styles