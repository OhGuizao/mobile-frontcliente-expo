import * as React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import {style} from '../css/Styles'
import { servidor } from '../config/Caminho'

export default function Login({navigation}) {
    return (
        <View style={style.container}>
            <Image source={require("../assets/icon.png")} style={style.imglogo}/>
                <View style={style.controles}>
                    <TextInput placeholder="Usuário" style={style.input}/>
                    <TextInput placeholder="Senha" secureTextEntry style={style.input}/>
                    <TouchableOpacity style={style.btnlogar}onPress={()=>{
                        navigation.navigate("Home")
                    }}> 
                        <Text style={style.txtbtnlogar}>Logar</Text>
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity style={style.btncadastrar}onPress={()=>{
                        navigation.navigate("Cadastro")
                    }}>
                        <Text style={style.txtbtncadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
        </View>
    )
}