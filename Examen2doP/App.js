import React from 'react';
import { Text, View, StyleSheet,  TextInput, Button, Alert,  ImageBackground } from 'react-native';
export default function App() {
  return (
  
    //1. Splashscreen por 4 segundos que diga bienvenido a la app
    const [showsplash, setShowsplash] = useState(true);

    useEfferct (() => {
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

    return (
    >

//2. Pantalla Principal con imagebackground que cubra toda la pantalla
    <ImageBackground
      source={{ uri: 'https://wallpapercave.com/wp/wp3850825.jpg' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View>
        <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>Pantalla Principal</Text>
      </View>
    </ImageBackground>
  );
}
//3. Dentro del imagebackground un view contenedor centrado con fondo semitransparente
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20, borderRadius: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>Pantalla Principal</Text>
      </View> 
//4. En el contenedor semitransparente mostrar: -Nombre completo -profesion/titulo -Breve biografia  (2-3 lineas) -correo electronico -numero telefonico





//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
});
