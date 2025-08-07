import { Colors } from "@/constants/Colors";
import { theme } from "@/constants/theme";
import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";


type ButtonProps ={
    title: string;
    onPress:()=> void;
    variant?: 'primary' | 'secondary' | 'text';
    loading?: boolean;
    disabled?: boolean;
};

export const Button = ({
    title,
    onPress,
    variant= 'primary',
    loading = false,
    disabled = false,
}: ButtonProps )=>{

    const getButtonStyle = () =>{
        switch(variant){
            case 'secondary':
                return [styles.button, styles.secondaryButton];
            case 'text':
                return [styles.button, styles.textButton];
            default:
                return styles.button;
        }
    };

    const getTextStyle = ()=>{
        switch (variant){
            case 'secondary':
                return styles.secondaryText;
            case 'text':
                return styles.textButtonText;
            default:
            return styles.buttonText;
        }
    };

    return(
        <Pressable style={({pressed})=>[
            getButtonStyle(),
            pressed && styles.pressed,
            disabled && styles.disabled,
        ]}
        onPress={onPress}
        disabled={disabled || loading}
        >
            {loading ?(
                <ActivityIndicator color={Colors.white}/>
            ):(
                <Text style={getTextStyle()}>{title}</Text>
            )}
        </Pressable>
    );


};



const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.large,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth:120,
    },
    secondaryButton:{
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    textButton:{
        backgroundColor: 'transparent',
        paddingVertical: theme.spacing.small,
    },
    buttonText:{
        color: Colors.white,
        fontFamily: theme.fonts.bold,
        fontSize: 16,
    },
    secondaryText:{
        color: Colors.primary,
        fontFamily:theme.fonts.bold,

    },
    textButtonText:{
        color: Colors.primary,
        fontFamily: theme.fonts.regular,
        textDecorationLine: 'underline',
    },
    pressed:{
        opacity: 0.8,
    },
    disabled:{
        opacity:0.5,
    },
});