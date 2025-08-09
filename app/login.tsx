import { Button } from '@/components/ui/Button';
import { Colors } from '@/constants/Colors';
import { theme } from '@/constants/theme';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function LoginScreen() {
  const handleLogin = () => {
    console.log('Iniciar sesión');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Iniciar Sesion
        </Text>

        <TextInput
        placeholder='Correo electronico'
        style={styles.input}
        keyboardType='email-address'
        />
        <TextInput
        placeholder='Contraseña'
        style={styles.input}
        secureTextEntry
        />
      <Button 
        title="Ingresar" 
        onPress={() => router.push('/home')} 
        variant="primary"
      />
      
      <Button
        title="Registrarse"
        onPress={() => router.push('/register')}
        variant="text"
        style={{ marginTop: 10 }}
      />
      
      <Button
        title="Olvidé mi contraseña"
        onPress={() => {}}
        variant="text"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:theme.spacing.large,
        backgroundColor:Colors.background,
    },
    title:{
        fontFamily: theme.fonts.bold,
        fontSize:24,
        color: Colors.text,
        marginBottom: theme.spacing.large,
        textAlign:'center',
    },
    input:{
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.medium,
        fontFamily: theme.fonts.regular
    }
})