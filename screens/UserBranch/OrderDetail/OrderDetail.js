import React, { useEffect, useState } from 'react'
import * as axios from 'axios'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { getOrderById } from '../../../api/api';


import OrderDetailComponent from '../../../components/OrderDetailComponent'

const OrderDetail = ({ route,
    navigation,
    deliveryDate,
    courierFullName,
    productArray,
    deliveryTime,
    deliveryAdress,
    service,
    setOrderDetail }) => {

    const { orderNumber } = route.params;

    const [loading, setLoading] = useState(false)

    

    useEffect(() => {
        setLoading(true)
        getOrderById(orderNumber)
        .then((response) => {setOrderDetail(response.data), setLoading(false)})
        .catch(({ response }) => alert(response.data.message));
    }, [])

    if (loading===false){
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.orderDetail}>
                    <View style={styles.deliveryInfo}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>
                                Дата: {deliveryDate}
                            </Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>
                                ФИО курьера: {courierFullName}
                            </Text>
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>
                                Номер заказа: {orderNumber}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.deliveryInfo}>
                        <Text style={{ color: 'white' }}>{service}:</Text>

                        {
                            productArray.map((el) => (
                                <OrderDetailComponent
                                    key={el._id}
                                    title={el.title}
                                    productPrice={el.productPrice}
                                    quantity={el.quantity} />
                            ))
                        }
                    </View>
                </View>
                <View style={styles.deliveryDetail}>
                    <View style={styles.deliveryDetailInfo}>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            Время доставки: {deliveryTime}
                        </Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>
                            Адрес: {deliveryAdress}
                        </Text>
                    </View>
                </View>
                <View style={styles.doneButton}>
                    <TouchableHighlight>
                        <Text style={{ color: 'white' }}>
                            Завершить заказ
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.cancelButton}>
                    <TouchableHighlight>
                        <Text style={{ color: 'white' }}>
                            Отменить заказ
                        </Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )} else{
        return (
            <View>
                <Text>Загрузка</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderDetail: {
        width: '100%',
        backgroundColor: 'blue',
        marginTop: 10,
        borderRadius: 20
    },
    deliveryInfo: {
        marginTop: 10,
        marginLeft: 10,
    },
    deliveryDetail: {
        width: '100%',
        height: 80,
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    deliveryDetailInfo: {
        marginLeft: 10
    },
    doneButton: {
        backgroundColor: 'green',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderRadius: 20,
        marginTop: 10
    },
    cancelButton: {
        backgroundColor: 'red',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderRadius: 20,
        marginTop: 10

    }
})

export default OrderDetail