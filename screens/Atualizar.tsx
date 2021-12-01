import * as React from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { servidor } from "../config/Caminho";
import { style } from "../css/Styles";
import { Ionicons } from '@expo/vector-icons';

//variaveis globais
let idcliente = "";
let nome = "";
let email = "";
let rs = "";


export default function Atualizar({ route }) {
    const { cliente } = route.params;
    console.log(`Tela Atualizar ${cliente.senha}`)

    const { token } = route.params;
    console.log(`Token no atualizar ${token}`)
    rs = token;

    //condições de estado do atualizar
    const [nomecliente, setNomeCliente] = React.useState(cliente.nome);
    const [emailcliente, setEmailCliente] = React.useState(cliente.email);
    idcliente = cliente._id;


    return (
        <View style={style.container}>
            <Text style={style.tituloAtualizar}>
                Atualizar dados
            </Text>
            <View style={style.controles}>
                <TextInput placeholder="Nome do Cliente" style={style.input} value={nomecliente} onChangeText={(value) => setNomeCliente(value)} />
                <TextInput placeholder="E-mail" keyboardType="email-address" style={style.input} value={emailcliente} onChangeText={(value) => setEmailCliente(value)} />
                <TouchableOpacity style={style.btnlogar} onPress={() => {
                    nome = nomecliente;
                    email = emailcliente;

                    efetuarAtualizacao();

                    setNomeCliente('');
                    setEmailCliente('');
                }}>
                    <Text style={style.txtbtnlogar}>
                        Atualizar os dados
                    </Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={style.apagar} onPress={() => {
                apagarUsuario();
            }}>
                <Ionicons name="trash-bin" size={24} color="red" />
                <Text style={style.txtbtnapagar}>Apagar a conta</Text>
            </TouchableOpacity>


        </View>
    )
}

function efetuarAtualizacao() {

    fetch(`${servidor}/atualizar/${idcliente}`, {
        method: 'PUT',
        headers: {
            accept: 'aplication/json',
            'content-type': 'applicantion/json',
            token: rs
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then((response) => response.json())
        .then((rs) => {
            Alert.alert("Atualização", rs.output);
        })
        .catch((erro) => console.error(`Erro ao tentar ler a API -> ${erro}`))
}


function apagarUsuario() {

    let yeOrNo = false;
    //  Função para a validação de apagar a conta
    Alert.alert("Banco Itau", "Você realmente deseja apagar essa conta?", [
        {
            text: "Cancelar",
            onPress: () => { },
        },
        {
            text: "Apagar",
            onPress: () => yeOrNo = true
        },
    ]);

    if (yeOrNo) {
        fetch(`${servidor}/apagar/${idcliente}`, {
            method: 'DELETE',
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "token": rs
            }
        }).then((response)=>response.json())
        .then((dados)=>{
            if(!dados){
                return Alert.alert("Apagado","Conta excluida");
            }
            else{
                Alert.alert("Atenção",dados.output)
            }
        }).catch((erro)=>console.error(`Erro ao ler a api -> ${erro}`));

    }
}