import * as React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { style } from '../css/Styles'
import { servidor } from '../config/Caminho'

//variareis globais
let us = ""
let sh = ""
let resultado: any = [];

export default function Login({ navigation }) {

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("")
    return (
        <View style={style.container}>
            <Image source={require("../assets/icon.png")} style={style.imglogo} />
            <View style={style.controles}>
                <TextInput placeholderTextColor='#cddafd' placeholder="Usuário" style={style.input}
                    value={usuario}
                    onChangeText={(value) => setUsuario(value)} />

                <TextInput placeholder="Senha" secureTextEntry placeholderTextColor='#cddafd' style={style.input}
                    value={senha}
                    onChangeText={(value) => setSenha(value)} />


                <TouchableOpacity
                    style={style.btnlogar}
                    onPress={() => {

                        us = usuario;
                        sh = senha;
                        //efetuar os testes de senhae  usuario
                        let retorno = efetuarLogin();

                        if (retorno[0] == "Logado") {
                            navigation.navigate("Home", { dados: retorno })

                        }

                    }}
                >
                    <Text style={style.txtbtnlogar}>Login</Text>
                </TouchableOpacity>


            </View>
            <TouchableOpacity style={style.btncadastrar} onPress={() => {
                navigation.navigate("Cadastro")
            }}
            >
                <Text style={style.txtbtncadastrar}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}


function efetuarLogin() {
    fetch(`${servidor}/login`, {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            usuario: us,
            senha: sh
        })
    })
        .then(response => response.json())
        .then(resp => {
            resultado[0] = resp.output;
            resultado[1] = resp.payload;
            resultado[2] = resp.token;
        })
        .catch((erro) => console.error(`Erro ao tentar buscar a api ->${erro}`))
    return resultado;
}