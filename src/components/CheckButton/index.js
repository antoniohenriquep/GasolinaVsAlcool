import React from 'react';
import { Text, Pressable, StyleSheet} from 'react-native';

export default function CheckButton(props) {
 return (
    <Pressable 
    style={({pressed}) =>[
        {
            backgroundColor: pressed ? '#95bb72': '#658354'
        },
        styles.area
    ]}
    onPress = {this.props.onPress}
    >
        <Text style={styles.text}>Calcular</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
    area:{
        //backgroundColor:'#95bb72',
        height:55,
        width:"90%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:5
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        color:'black'
    }
});