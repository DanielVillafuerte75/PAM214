import React from 'react';
import { Text, View, StyleSheet,  TextInput, Button, Alert,  ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  const [showsplash, setShowsplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [profesion, setProfesion] = useState('');
  const [biografia, setBiografia] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const mostrarAlerta = () => {

    if ([nombre.trim(), profesion.trim(), biografia.trim(), correo.trim(), telefono.trim()].includes('')) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    } else {
      Alert.alert('Perfil Guardado', `Nombre: ${nombre}\nProfesión: ${profesion}\nBiografía: ${biografia}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
      Alert.alert('Perfil Guardado', '¡Su perfil ha sido guardado con éxito!');
    }
  };
  return (
  <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crear Perfil</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Profesión"
          value={profesion}
          onChangeText={setProfesion}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Biografía"
          value={biografia}
          onChangeText={setBiografia}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <Button title="Guardar Perfil" onPress={mostrarAlerta} />
      </ScrollView>
  );
}

    //2. Splash Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showsplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>¡Bienvenido a la app!</Text>
      </View>
    );
  }
  return 



// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 80,
  },
}); 