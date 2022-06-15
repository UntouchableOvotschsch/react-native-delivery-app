import React, { useEffect, useState } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import { getOrders } from '../../api/api';
import OrderListComponent from '../../components/OrderListComponent';
import ScreenHeader from '../../components/ScreenHeader';



const MyOrders = (props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getOrders(props.id)
            .then((response) => { props.setOrders(response.data), setLoading(false) })
            .catch((e) => {
                return alert(e)
            })
    }, [])

    if (loading === false) {
        return (
            <View style={styles.container}>

                <View style={styles.backgroundContainer}>

                    <View style={styles.element}>
                        <Text style={{ color: 'white' }}>Мои заказы</Text>
                    </View>

                    <View style={styles.mainElement}>

                        <ScrollView style={styles.ordersContainer}>

                            {
                                props.orders.map((order) => (
                                    <OrderListComponent
                                        key={order._id}
                                        service={order.service}
                                        deliveryDate={order.deliveryDate}
                                        deliveryTime={order.deliveryTime}
                                        orderNumber={order._id}
                                        navigation={props.navigation}
                                        deliveryAdress={order.deliveryAdress}
                                    />
                                ))
                            }

                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View>
                <Text>
                    Загрузка
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fullNameContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'blue',
        padding: 10,
        paddingHorizontal: 30
    },
    fullName: {
        fontSize: 20,
        color: 'blue',
    },
    avatar: {
        height: 80,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'blue',
        marginVertical: 15
    },
    backgroundContainer: {
        height: '90%',
        width: '100%',
    },
    element: {
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainElement: {
        height: '100%',
        width: '100%',
        backgroundColor: 'blue',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    ordersContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10
    },
    erText: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }

})

export default MyOrders;