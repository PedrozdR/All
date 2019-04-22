import {StyleSheet,Dimensions} from 'react-native';


const styles = StyleSheet.create({
    container:{
        height: Dimensions.get("window").height-520,
        width: Dimensions.get("window").width-242,
        backgroundColor: '#f1f1f1',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    cardContent:{
        marginTop:16,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    icon:{
        marginTop:18
    },
    cardTitle:{
        marginTop: 8,
        fontWeight: 'bold',
    }
})

export default styles