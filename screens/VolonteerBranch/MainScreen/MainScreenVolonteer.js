import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderListComponent from "../../../components/OrderListComponent";

const MainScreenVolonteer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{
                    fontSize: 20, 
                    color: 'blue',
                    fontWeight: 'bold'
                }}>Доступные заказы:</Text>
            </View>
            <ScrollView>
                <OrderListComponent/>
                <OrderListComponent/>
                <OrderListComponent/>
                <OrderListComponent/>
                <OrderListComponent/>
                <OrderListComponent/>

            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        height: '100%',
    },
    listComponent:{
        display: 'flex',
        backgroundColor: 'blue',
        height: 150,
        borderRadius: 20
    },
    header: {
        marginStart: 10,
        marginVertical: 10
    }
    

})

export default MainScreenVolonteer