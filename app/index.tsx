import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MobilBank</Text>
      <Text style={styles.subtitle}>Bienvenido</Text>
      <Pressable style={styles.button}
      onPress={()=> router.push('/login')}
      >
        <Text style={styles.buttonText}>Comenzar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 30,
    color: Colors.text,
    marginBottom: theme.spacing.large,
  },
  subtitle:{
    fontFamily: theme.fonts.bold,
    fontSize:24,
    color:Colors.text,
    marginBottom: theme.spacing.large,


  },
  button: {
    backgroundColor: Colors.primary,
    padding: theme.spacing.medium,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: theme.fonts.bold,
  },
});