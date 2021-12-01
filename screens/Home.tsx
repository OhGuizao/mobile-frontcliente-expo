import * as React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { servidor } from '../config/Caminho';
import { style } from '../css/Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Atualizar from './Atualizar';




const Stack = createNativeStackNavigator();
let rs = "";
export default function Home({ route }) {
    const { dados } = route.params;
    rs = dados[2]
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="TelaHome" component={TelaHome} />
                <Stack.Screen name="Atualizar" component={Atualizar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}




function TelaHome({ navigation }) {
    const [lstCliente, setLstCliente] = React.useState([]);
    console.log(`Dados na home -> ${rs}`)

    React.useEffect(() => {
        fetch(`${servidor}`, {
            method: "GET",
            headers: {
                accept: 'application/json'
                , 'content-type': 'application/json'
                , 'token': rs
                ,
            },
        })

            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setLstCliente(result.output);
            })
            .catch((erro) => console.error(`Erro ao ler a api ->${erro}`))
    }, [])

    return (
        <View style={style.container}>
            <ScrollView horizontal={false} style={style.scroll}>
                <Image source={{ uri: 'data:image/png;base64,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' }} style={style.imgCliente} />
                <View>
                    {
                        lstCliente.map((item, index) => (
                            <View style={style.cliente} key={index}>
                                <Text style={style.nome}>Nome:{item.nome}</Text>
                                <Text style={style.cpf}>Cpf:{item.cpf}</Text>
                                <Text style={style.email}>Email:{item.email}</Text>
                                <Text style={style.usuario}>Usuario:{item.usuario}</Text>
                                <TouchableOpacity
                                //Navegação do botão touchableopacity, importação de arquivos via rota
                                    onPress={() => {
                                        navigation.navigate("Atualizar",{cliente:item,token:rs})
                                    }}>
                                    <MaterialCommunityIcons name="account-edit" size={24} color="black" />
                                </TouchableOpacity>

                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}