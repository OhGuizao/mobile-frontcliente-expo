import * as React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { View, Text, TextInput } from 'react-native'
import { servidor } from '../config/Caminho';
import { style } from '../css/Styles'

//Variaveis globais que vão conversar com a function efetuarCadastro
let nome = "";
let email = "";
let cpf = "";
let usuario = "";
let senha = "";

//local onde inicia o projeto
export default function Cadastro() {

    //Vamos criar o estado inical das caixas do formulario
    //formulario (vazio)
    const [nomeCliente, setnomeCliente] = React.useState("")
    const [emailCliente, setEmailCliente] = React.useState("")
    const [cpfCliente, setcpfCliente] = React.useState("")
    const [usuarioCliente, setusuarioCliente] = React.useState("")
    const [senhaCliente, setsenhaCliente] = React.useState("")

    //Resposta do inicio do projeto
    return (
        <View style={style.container}>
            <Text style={style.tituloCadastro}>Cadastro</Text>
            <View style={style.controles}>

                {/* formularios no qual estão esperando uma alteração para enviar ao "Let", por coonta que estão vazios */}
                <TextInput placeholder="Nome do Cliente" style={style.input} value={nomeCliente} onChangeText={(value) => setnomeCliente(value)} />
                <TextInput placeholder="Email" style={style.input} keyboardType="email-address" value={emailCliente} onChangeText={(value) => setEmailCliente(value)} />
                <TextInput keyboardType="number-pad" placeholder="CPF" style={style.input} value={cpfCliente} onChangeText={(value) => setcpfCliente(value)} />
                <TextInput placeholder="Usuário" style={style.input} value={usuarioCliente} onChangeText={(value) => setusuarioCliente(value)} />
                <TextInput placeholder="Senha" style={style.input} secureTextEntry value={senhaCliente} onChangeText={(value) => setsenhaCliente(value)} />

                <TouchableOpacity style={style.btncadastrar} onPress={() => {

                    nome = nomeCliente;
                    email = emailCliente;
                    cpf = cpfCliente;
                    usuario = usuarioCliente;
                    senha = senhaCliente;

                    efetuarCadastro()

                    //limpa a tela após o cadastro
                    setnomeCliente("");
                    setEmailCliente("");
                    setcpfCliente("");
                    setusuarioCliente("");
                    setsenhaCliente("");
                }}>
                    <Text style={style.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

//Função que vai pegar os dados digitados pelo usuário e mandar ao servidor para ir diretamente ao banco
function efetuarCadastro() {


//faremos um fetch, ou seja, uma busca de dados por url em js IMPORTANTE!!!!
fetch(`${servidor}/cadastro`,{
    method:"POST",
    headers:{
        accept:"aplication/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        nome:nome,
        email:email,
        cpf:cpf,
        usuario:usuario,
        senha:senha
    })
}).then((response)=>response.json())
.then((resultado)=>{


    //para app
    Alert.alert("O app diz...",resultado.output);

    //para site
    //#  alert(resultado.output);
    


    // console.log(resultado);
}).catch((erro)=>console.error(`Erro ao executar -> ${erro}`))
}