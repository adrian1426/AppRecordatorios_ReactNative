import React from 'react';
import { StyleSheet, View, TextInput, Modal, Text} from 'react-native';
import Button from './button';

const ModalComponent = (props) =>{
    const {openModal,onPressModal, onChangeText, onPressGuardar} = props;
    return(
        <Modal visible={openModal} animationType='slide'>
          <View style={[styles.modal]}>
            <View>
              <Text style={styles.tituloModal}>Ingrese Recordatorio</Text>
              <View style={styles.viewInput}>
                <TextInput 
                  style={styles.recordatorio} 
                  placeholder="titulo recordatorio"
                  placeholderTextColor="#CCCCCC"
                  onChangeText={onChangeText}
                />
              </View>
              <View style={styles.viewBtnModal}>
                <Button
                  titulo="Cancelar"
                  onPress={onPressModal}
                  tipo="Cancelar"
                />
                <Button
                  titulo="Agregar"
                  onPress={onPressGuardar}
                  tipo="OK"
                />
              </View>
            </View>
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal:{
      backgroundColor:'#ffffff',
      padding:'5%',
      flex: 1,
      flexDirection:'column',
      justifyContent:'center',
  
    },
    tituloModal:{
      fontSize: 25,
      color:'#004445',
      fontFamily:'Inria Serif'
    },
    viewBtnModal:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    viewInput:{
      paddingTop:'5%',
      paddingBottom:'5%'
    },
    recordatorio:{
      color:'#140303',
      fontSize:18,
      borderWidth: 1,
      borderColor:'#DDDDDD',
      borderRadius: 5,
      height: 40
    }
  });

export default ModalComponent;