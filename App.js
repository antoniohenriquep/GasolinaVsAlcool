import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Modal } from "react-native";

export default function App()
{
    const [gasolina, setGasolina] = useState()
    const [alcool, setAlcool] = useState()

    


    return(
        <View style = {styles.container}>
            <View style = {styles.imgArea}>
                <View style = {{width:250, height: 250, borderRadius:200,backgroundColor:'red'}}>
                </View>
                <Text>Qual a melhor opção?</Text>
            </View>
            <Text>Alcool</Text> <Text>(preço por litro)</Text>
            <TextInput
            keyboardType='decimal-pad' 
            onChangeText={(text) => setAlcool(text)}
            placeholder = "Digite o valor do álcool"
             />

            <Text>Gasolina</Text> <Text>(preço por litro)</Text>
            <TextInput 
            keyboardType='decimal-pad'
            onChangeText={(text) => setGasolina(text)}
            placeholder = "Digite o valor da gasolina"
             />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F5F5F5'
    }, 
    imgArea:{
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },
    title:{
        fontSize:32,
        fontWeight:'bold'
    }
})