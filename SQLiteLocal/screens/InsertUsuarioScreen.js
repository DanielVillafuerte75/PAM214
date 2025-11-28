import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function InsertUsuarioScreen() {
  const [nombre, setNombre] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const handleAgregar = () => {
    if (!nombre.trim()) {
      Alert.alert('Error', 'Por favor ingresa un nombre');
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre: nombre,
      fechaCreacion: new Date().toISOString()
    };

    setUsuarios([nuevoUsuario, ...usuarios]);
    setNombre('');
    Alert.alert('Éxito', 'Usuario agregado (modo demo)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSERT & SELECT - MODO DEMO</Text>
      
      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}>Insertar Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity style={styles.button} onPress={handleAgregar}>
          <Text style={styles.buttonText}>Agregar Usuario</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectSection}>
        <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
        {usuarios.length === 0 ? (
          <Text style={styles.emptyText}>No hay usuarios</Text>
        ) : (
          usuarios.map((usuario) => (
            <View key={usuario.id} style={styles.userItem}>
              <Text style={styles.userName}>{usuario.nombre}</Text>
              <Text style={styles.userId}>ID: {usuario.id}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  selectSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  userItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userId: {
    color: '#666',
    fontSize: 12,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
  },
});