//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
//2. Main: Zona de componentes que van a estar a la vista
export default function App() {
const[Contador,setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}> {Contador}</Text>
      
       <View style={styles.contenedorBotones}>
      <Button title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//3. Estilos: Zona estetica y de posicionamiento  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90b9e0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
   color:'#3f09acff',
   fontSize: '50',
   fontFamily: 'Berlin Sans FB',
   fontWeight: 'bold',
   fontStyle:'italic',
   textDecorationLine: 'line-througth',
  },
  texto2:{
   color:'#800000ff',
   fontSize: '40',
   fontFamily: 'Times New Roman',
   fontWeight: '900',
   fontStyle:'italic',
   textDecorationLine: 'underline',
  },
  contenedorBotones:{
    marginTop:'14',
    flexDirection:'row',
    gap:15
  },
});