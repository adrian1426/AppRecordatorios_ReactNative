import React from 'react';
import { StyleSheet, Text, TouchableHighlight} from 'react-native';

const Button = (props) =>{
    const {titulo,onPress, tipo} = props;
    return(
        <TouchableHighlight
            style={ tipo===undefined ? styles.boton : (tipo==="OK" ? styles.botonModalOK : styles.botonModalCan)}
            onPress={onPress}
        >
            <Text style={styles.textoBtn}>{titulo}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    boton:{
        marginBottom: 20,
        height: 40,
        backgroundColor:'#111f4d',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 8
      },
    botonModalOK:{
      marginBottom: 20,
      width:'45%',
      height: 40,
      backgroundColor:'#111f4d',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 8
    },
    botonModalCan:{
      marginBottom: 20,
      width:'45%',
      height: 40,
      backgroundColor:'#e43a19',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 8
    },
    textoBtn:{
      color:'#eeeeee',
      fontSize: 17
    }
  });
  

export default Button;