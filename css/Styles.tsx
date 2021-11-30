import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001219'
    },

    imglogo: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 20
    },

    controles: {
        width: '80%',
        padding: 10,
        margin: 20,
        // shadowColor: '#808080',
        // shadowRadius: 10,
        // shadowOffset: { width: 10, height: 10 },
        // shadowOpacity: 0.8,
        //elevation,
        backgroundColor: '#003049',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },

    input: {
        borderBottomColor: '#cddafd',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 10,
        fontSize: 15,
        // textTransform: 'lowercase',
        color: '#cddafd'

    },

    btnlogar: {
        padding: 30,
        backgroundColor: '#003049',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 20,
        color: 'white'
    },

    txtbtnlogar: {
        textAlign: 'center',
        color: '#cddafd',
        width: 150,
        height: 30,
        textAlignVertical: "center",
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        // textTransform: 'lowercase',
        zIndex: 10000


    },

    btncadastrar: {
        backgroundColor: '#003049',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },

    txtbtncadastrar: {
        textAlign: 'center',
        color: '#cddafd',
        width: 150,
        height: 30,
        textAlignVertical: "center",
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        // textTransform: 'lowercase',
        zIndex: 10000
    },

    tituloCadastro: {
        fontSize: 30,
        color: "#cddafd",

    },

    imgCliente: {
        width: '100%',
        height: 200,
        resizeMode: "contain"
    },
    cliente: {
        padding: 20,
        backgroundColor: '#fff',

    },

    nome: {
        fontSize: 15,
        color: '#012a4a',
        fontWeight: 'bold'
    },

    cpf: {
        fontSize: 15,
        color: '#01497c',
        fontWeight: 'bold'
    },

    email: {
        fontSize: 15,
        color: '#2a6f97',
        fontWeight: 'bold'
    },

    usuario: {
        fontSize: 15,
        color: "#2c7da0",
        fontWeight: "bold"
    },
    scroll:{
        width:"#100"
    }


})