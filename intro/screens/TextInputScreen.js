import { Text, StyleSheet, View, TextInput, Button,Alert } from 'react-native';
import React, { Component, useState } from 'react';

export default function TextInputScreen() {
   const [nombre, setNombre] = useState(" ");
   const [password, setPassword] = useState('');
   const [comentario, setComentario] = useState('');


  const mostarAlerta = () => {
    if ([nombre.trim(), password.trim(), comentario.trim()].includes ('')){

      alert('Error', 'Por favor rellena todos los campos.');
      Alert.alert('Error', 'Por favor rellena todos los campos.');
    } else {
      Alert.alert(`Hola, ${nombre}!`, 'Tu nombre ha sido registrado con exito.');
      alert(`Hola, ${nombre}! Tu nombre ha sido registrado con exito. Tu contraseña es ${password}`);
      
      setNombre('');
    }

    };

    return (
      <View style={styles.container}> 
        <Text style={styles.label}>Ingresa tu nombre:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej. Daniel"
          value={nombre}
          onChangeText={setNombre}
          keyboardType="default"
          autoCapitalize="words"
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Ej. Password"
         keyboardType="numeric"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          value={comentario}
          onChangeText={setComentario}
          multiline={true}
          numberOfLines={4}
        />

        <Button 
        title="Saludar"
         onPress={mostarAlerta}
         color="rgba(8, 175, 167, 0.27)" />
      </View>
    );
  

}

// 4. Estilos para nuestros componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});
