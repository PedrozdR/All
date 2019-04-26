import { StyleSheet, Dimensions } from 'react-native';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    userContainer: {
        paddingTop: 24,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: '#f1f1f1',
        borderWidth: 2,
        overflow: 'hidden'
    },
    avatar: {
        alignSelf: 'center',
        width: 80,
        height: 80,
    },
    username: {
        marginTop: 10,
        fontSize: fonts.big,
        marginBottom: 15,
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 18
    },
    todoTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 18,
        marginTop: 20,
        marginBottom: 18,
        color: '#32303D'
    },
    taskContainer: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    newListContainer: {
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        right: 15,
        bottom: 15
    },
    icon: {
        flexDirection: 'column',
        marginTop: 14
    },
    count: {
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 8,
        color: colors.white,
    },
    taskText: {
        fontSize: 12,
        marginBottom: 8,
        color: colors.white,
        fontWeight: 'bold'
    },
    todoListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },

})

export default styles