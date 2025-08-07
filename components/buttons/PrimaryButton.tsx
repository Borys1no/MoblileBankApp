import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    title:string;
    onPress: () =>void;
};

export const PrimaryButton = ({title, onPress}: Props)=>{
    return(
        <TouchableOpacity
        style={[styles.button, {backgroundColor:Colors.primary}]}
        onPress={onPress}
        >
        <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        padding:16,
        borderRadius: 8,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
