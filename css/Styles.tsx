import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imglogo: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    controles: {
        width: '%80',
        padding: 10,
        margin: 20,
        shadowColor: '#808080',
        shadowRadius: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        backgroundColor: 'white'
    },
    input: {
        borderBottomColor: '#eee',
        borderBottomWidth:1,
        padding:5,
        marginBottom:10,
        fontSize:15,
        textTransform:'lowercase'

    },
    btnlogar: {
        padding:30,
    },
    txtbtnlogar: {
        textAlign:'center',
        color:'white',
        backgroundColor:'#808080',
        borderRadius:10,
        textTransform:'lowercase'

    },
    btncadastrar: {},
    txtbtncadastrar: {
        textAlign:'center',
        color:'white',
        backgroundColor:'#808080',
        width:200,
        height:50,
        textAlignVertical:"center",
        alignItems:'center',
        padding:15,
        borderRadius:10,
        textTransform:'lowercase'
    },

})