import React from 'react';
import { StatusBar } from 'react-native';
import InsertUsuarioScreen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#f5f5f5" 
        translucent={false}
      />
      <InsertUsuarioScreen />
    </>
  );
}