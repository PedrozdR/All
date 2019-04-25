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
    username: {
        marginTop: 10,
        fontSize: fonts.big,
        marginBottom: 15,
        fontWeight: 'bold',
        color:colors.white,
        fontSize:18
    },
    todoTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 18,
        marginTop: 20,
        marginBottom: 18,
    },
    taskContainer: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    newListContainer: {
        alignItems: 'center',
        padding: 14,
        backgroundColor: colors.primary,
    },
    count: {
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 8,
        color: colors.white
    },
    taskText: {
        fontSize: 12,
        marginBottom: 8,
        color: colors.white
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