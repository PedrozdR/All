import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    taskContent: {
        flexDirection: 'row',
    },
    task: {
        flex: 1,
        fontSize: 18,
        width: Dimensions.get('window').width - 100,
        padding: 14,
    },
    dueDate: {
        marginLeft: 20,
        marginTop: 8,
    }
})

export default styles