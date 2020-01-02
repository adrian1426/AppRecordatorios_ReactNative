import React from 'react';
import { StyleSheet, View,FlatList, Text} from 'react-native';
import datos from '../datos/data.js';
import {Button,Modal,RecordatorioItem} from './components';

class Index extends React.Component {

  state = {
    data: datos,
    openModal: false,
    text:''
  }

  render(){

    const {data, openModal} = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.tituloHeader}>App Recordatorios</Text>
        </View>

        <Button
          titulo="AgregarRecordatorio"
          onPress={this.onPressModal}
        />

        <FlatList
          style={styles.listRecordatorios}
          data={data}
          renderItem={RecordatorioItem}
        />

        <Modal 
          openModal={openModal}
          onPressModal={this.onPressModal}
          onChangeText={this.onChangeText}
          onPressGuardar={this.onPressGuardar}
        />

      </View>
    );
  }

  onPressModal = () =>{
    this.setState({openModal: !this.state.openModal,text:''});
  }

  onChangeText = (text) =>{
    this.setState({text});
  }

  onPressGuardar = () =>{
    const {text, data} = this.state;
    const datos = [{key: Math.random().toString(),title:text}].concat(data);
    this.setState({data:datos,openModal:false,text:''});
  }
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingBottom:'15%',
    backgroundColor: '#f2f4f7',
    justifyContent: 'center',
  },
  header:{
    marginBottom: 50,
    height: 50,
    borderBottomWidth:2,
    borderBottomColor:'#e43a19',
    justifyContent:'center',
    alignItems:'center'
  },
  tituloHeader:{
    fontSize: 25,
    color:'#111f4d',
    fontFamily:'Inria Serif'
  },
  listRecordatorios:{
    padding: '5%'
  }
});
