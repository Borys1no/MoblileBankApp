import { Colors } from "@/constants/Colors";
import { theme } from "@/constants/theme";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesion</Text>

            <TextInput
            placeholder="Correo electronico"
            style={styles.input}
            keyboardType="email-address"
            />
            <TextInput
            placeholder="Contraseña"
            style={styles.input}
            secureTextEntry
            />
            <Pressable
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Ingresar
                    
                </Text>

            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding:theme.spacing.large,
        backgroundColor: Colors.background,

    },
    title:{
        fontFamily:theme.fonts.bold,
        fontSize: 24,
        color:Colors.text,
        marginBottom: theme.spacing.large,
        textAlign: 'center',

    },
    input:{
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.medium,
        fontFamily: theme.fonts.regular,
    },

    button:{
        backgroundColor: Colors.primary,
        padding: theme.spacing.medium,
        borderRadius: 8,
        marginTop:theme.spacing.small,
    },
    buttonText:{
        color: Colors.white,
        fontFamily: theme.fonts.bold,
        textAlign: 'center',
        fontSize:16,
    },
});

