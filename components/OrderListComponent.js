import React from 'react'


import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';


const OrderListComponent = (props) => {
    const orderDetailIntent = () => {
        props.navigation.navigate('OrderDetail',{
            orderNumber: props.orderNumber
        })
    }

    return (
        <TouchableOpacity style={styles.order} onPress={orderDetailIntent}>

            <View style={styles.whiteHeader}>
                <Text style={{ color: 'blue' }}>{props.deliveryDate}</Text>
                <Text style={{ color: 'blue' }}>Заказ: {props.orderNumber}</Text>
            </View>

            <View style={{ backgroundColor: 'blue', borderRadius: 20 }}>
                <View style={{backgroundColor: 'white'}}>
                    <View style={styles.blueHeader}>
                        <Text style={{ color: 'white' }}>Услуга: {props.service}</Text>
                    </View>
                </View>


                <View style={styles.redHeader}>
                    <Text style={{ color: 'white' }}>Ориентировочное время доставки: {props.deliveryTime}</Text>
                    <Text style={{ color: 'white' }}>Адрес: {props.deliveryAdress}</Text>
                </View>
            </View>


        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    order: {
        marginBottom: 10

    },
    whiteHeader: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    blueHeader: {
        backgroundColor: 'blue',
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: -20,
        borderBottomRightRadius: -20,
        paddingVertical: 20,
    },
    redHeader: {
        backgroundColor: 'red',
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingVertical: 10,
    }
})

export default OrderListComponent;