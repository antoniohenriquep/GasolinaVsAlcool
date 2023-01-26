import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Modal, Image } from "react-native";
import CheckButton from "./src/components/CheckButton/index"

export default function App()
{
    const [gasolina, setGasolina] = useState('')
    const [alcool, setAlcool] = useState('')
    const [modalEnabled, setModalEnabled] =  useState(false)
    
    
    function calculate()
    {
        let compare
        if(gasolina == '' || alcool == '' )
        {
            alert("É necessário que você informe os valores para prosseguir!")
        }

        compare = parseFloat(gasolina)/parseFloat(alcool)
        
        
        setModalEnabled(true)    
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.imgArea}>
                <Image 
                source={require('./src/img/logo.png')}
                />
                <Text style ={styles.title}>Qual a melhor opção?</Text>
            </View>

            <View style = {{flexDirection:'row', marginTop:5, alignItems:'baseline', marginLeft:23}}>
                <Text style ={styles.inputText}>Álcool</Text> 
                <Text style ={styles.smallText}>(preço por litro)</Text>
            </View>

            <View style={styles.inputArea}>
                <TextInput
                style ={styles.input}
                keyboardType='decimal-pad' 
                onChangeText={(text) => setAlcool(text)}
                placeholder = "Digite o valor do álcool!"
                />
            </View>
            
            <View style = {{flexDirection:'row', marginTop:5, alignItems:'baseline', marginLeft:23}}>
                <Text style ={styles.inputText}>Gasolina</Text> 
                <Text style ={styles.smallText}> (preço por litro)</Text>
            </View>

            <View style={styles.inputArea}>
                <TextInput 
                style ={styles.input}
                keyboardType='decimal-pad'
                onChangeText={(text) => setGasolina(text)}
                placeholder = "Digite o valor da gasolina! "
                />
                <CheckButton/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#dddddd',
        //F5F5F5
    }, 
    imgArea:{
        justifyContent:'center',
        alignItems:'center',
        padding:30,
        marginTop:30
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        color:'black'
    },
    inputArea:{
        //height:60,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:50,
        width:'90%',
        //borderWidth:0.8,
        borderRadius:5,
        marginBottom:10,
        backgroundColor:'#F5F5F5',
        padding:5,
        fontSize:14
        
    },
    inputText:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000'
        
    },
    smallText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000'
    }
})