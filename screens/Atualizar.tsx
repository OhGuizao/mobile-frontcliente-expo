import * as React from "react"
import { Text, View } from "react-native"
import { style } from "../css/Styles"

export default function Atualizar({ route }) {
    const {cliente} = route.params;
    console.log(`Tela Atualizar ${cliente}`)
    return (
        <View style={style.container}>
            <Text>
                Tela Home
            </Text>
        </View>
    )
}