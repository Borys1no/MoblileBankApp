import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
    </Tabs>
  );
}