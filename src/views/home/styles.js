import { StyleSheet, Dimensions } from 'react-native';

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
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: colors.light
    },
    count: {
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 8
    },
    taskText: {
        fontSize: 12,
        marginBottom: 8
    },
    plusIcon: {
        marginRight: 25,
        padding: 12,
    },
    listContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    containerList: {
        paddingLeft: 50,
        paddingRight: 20,
        //iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        //Android
        elevation: 3,
    }
})

export default styles