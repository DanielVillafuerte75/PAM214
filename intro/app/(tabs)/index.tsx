// 1. imports: Zona de importaciones
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

//2. MAIN: Zona de los componentes 
export default function TabOneScreen() {

  const [ Contador, setContador]=useState(0);

  return (
    //3. Zona estetica y posicionamiento
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Contador: {Contador}
      </Text>
      <Button title="Agregar" onPress={()=>setContador(Contador+1)} />
      <Button title="Quitar" onPress={()=>setContador(Contador-1)} />
      <Button title="Reiniciar" onPress={()=>setContador(0)} />
    </View>
  );
}