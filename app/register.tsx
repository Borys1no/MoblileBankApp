import { Button } from "@/components/ui/Button";
import { Colors } from "@/constants/Colors";
import { theme } from "@/constants/theme";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterScreen(){
    const handleLogin = () =>{
        console.log('Registro');
    };
    return(
        <View
        style={styles.container}>
        <Text style={styles.title}>
        Registro
        </Text>
        <TextInput
        placeholder="Nombres"
        style={styles.input}
        keyboardType="default"
        />
        <TextInput
        placeholder="Apellidos"
        style={styles.input}
        keyboardType="default"
        />
        <TextInput
        placeholder="Correo"
        style={styles.input}
        keyboardType="email-address"
        />
        <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        />
        <TextInput
        placeholder="Repita la contraseña"
        style={styles.input}
        secureTextEntry
        />
        <TextInput
        placeholder="Numero de telefono"
        style={styles.input}
        keyboardType="phone-pad"
        />

        <Button
        title="Registrar"
        onPress={()=>{}}
        variant="primary"
        />
        </View>

        
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:theme.spacing.large,
        backgroundColor: Colors.background,
    },
    title:{
        fontFamily:theme.fonts.bold,
        fontSize:24,
        color:Colors.text,
        marginBottom:theme.spacing.large,
        textAlign:'center',
    },
    input:{
        borderWidth:1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding:theme.spacing.medium,
        marginBottom:theme.spacing.medium,
        fontFamily:theme.fonts.regular
    }


})