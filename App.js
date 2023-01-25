import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Modal } from "react-native";

export default function App()
{
    return(
        <View style = {styles.container}>
            <View style = {styles.imgArea}>
                <View style = {{width:250, height: 250, borderRadius:200,backgroundColor:'red'}}>
                </View>
                <Text>Qual a melhor opção?</Text>
            </View>
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
    }
})