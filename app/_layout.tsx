import { Slot } from 'expo-router';
import { Text, View } from 'react-native';

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8d2E3' }}>
      <Slot />
      <Text style={{ textAlign: 'center' }}>Versión 1.0</Text> 
    </View>
  );
}