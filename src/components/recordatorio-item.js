import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({item}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        borderBottomColor:'#CCCCCC',
        marginBottom: 10
    },
    texto:{
        fontSize: 18
    }
});