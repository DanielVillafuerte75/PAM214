import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Hola mundo De React Native!
      </Text>
    </View>
  );
}

