import { Colors } from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, IconButton, Text } from 'react-native-paper';

export default function HomeScreen(){
    const userName = "Borys Cereceda";
    const accountBalance = 125.50;
    const accountNumber = "1234567890";

    return(
        <ScrollView style={styles.container}>
            {/*Header*/}
            <View style={styles.header}>
                <Text variant="titleMedium">Hola, <Text style={styles.bold}>{userName} </Text> </Text>
                <IconButton
                icon="bell-outline"
                size={24}
                onPress={()=> console.log("Ir a notificaciones")}
                />
            </View>
            {/**Tarjeta saldo numero cuenta */}
            <Card style={styles.balanceCard}>
                <Card.Content>
                    <Text variant="titleSmall">Saldo disponible</Text>
                    <Text variant="headlineMedium" style={styles.balance}> ${accountBalance.toFixed(2)} 
                    </Text>

                    <Text variant="bodySmall" style={styles.accountNumber}>
                        Cuenta: {accountNumber}
                    </Text>
                </Card.Content>
            </Card>
            {/**Acciones */}

            <Text 
            variant="titleMedium"
            style={styles.sectionTitle}
            >
                Acciones
            </Text>
            <View style={styles.actionsContainer}>
                <Card 
                style={styles.actionCard}
                onPress={()=> console.log("Transferencia")}
                >
                <Card.Content style={styles.cardContent}>
                    <Avatar.Icon size={48} icon={"swap-horizontal"}/>
                    <Text>Tranferencias</Text>
                </Card.Content>
                </Card>

                <Card 
                style={styles.actionCard}
                onPress={()=> console.log("Retiro")}
                >
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Icon size={48} icon={"cash-minus"}/>
                        <Text>Retiro</Text>
                    </Card.Content>
                </Card>

                <Card 
                style={styles.actionCard} onPress={()=> console.log("Deposito")}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Icon size={48} icon={"cash-plus"}/>
                        <Text>Depósito</Text>
                    </Card.Content>
                </Card>
                <Card 
                style={styles.actionCard}
                onPress={()=> console.log("Cuenta de ahorro")}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Icon size={48} icon={"bank"}/>
                        <Text>C. de ahorro</Text> 
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor: Colors.white,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    }, 
    bold:{
        fontWeight: "bold",
    },
    balanceCard:{
        marginBottom: 20,
        borderRadius: 12,
    },
    balance:{
        marginVertical:4,
        fontWeight: "bold",
    },
    accountNumber:{
        color: "#555",
    },
    sectionTitle:{
        marginBottom:12,
    },
    actionsContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "space-between",
    },
    actionCard:{
        width: "48%",
        marginBottom:12,
        borderRadius:12,
    },
    cardContent:{
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:12,
    },

});