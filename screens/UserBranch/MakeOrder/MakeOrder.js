import React, { useState } from 'react'
import axios from 'axios'


import { sendOrderAPI } from '../../../api/api';


import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
    Button,
    TouchableOpacity
} from 'react-native';

import AddBlock from '../../../components/AddBlock';
import AddNewProduct from '../../../components/AddNewProduct';
import DateTimePickerComponent from '../../../components/DateTimePicker';
// import { useLinkProps } from '@react-navigation/native';



const MakeOrder = ({
    navigation,
    orderArray,
    newProductTitle,
    newProductPrice,
    newProductQuantity,
    unitOfMeasure,
    updateProductTitle,
    updateProductPrice,
    countPlusInHt,
    countMinusInHt,
    countPlusInKg,
    countMinusInKg,
    updateUnitMeasure,
    addProduct,
    deleteProduct,
    updateDeliveryDate,
    updateDeliveryTime,
    deliveryDate,
    deliveryTime,
    updateDeliveryAdress,
    deliveryAdress, 
    id}) => {


    const sendOrder = async () => {
        if (orderArray.length === 0) {
            return alert('Заполните поля')
        }
        await sendOrderAPI(id, deliveryTime, deliveryDate, deliveryAdress, orderArray)
        .then((res)=>{
            if (res.status >= 200 && res.status < 300) {
                return (navigation.navigate('Main'),
                alert(res.data.message))
            } 
        })
        .catch(({ response }) => alert(response.data.message));
    }


    return (

        <View style={styles.container}>

            <ScrollView style={styles.backgroundContainer}>

                <View style={styles.element}>
                    <Text style={{ color: 'white' }}>Список продуктов</Text>
                </View>

                <View style={styles.mainElement}>

                    <View style={styles.ordersContainer}>
                        {
                            orderArray.map((orderElement) => (
                                <AddNewProduct
                                    key={orderElement.id}
                                    id={orderElement.id}
                                    price={orderElement.productPrice}
                                    title={orderElement.title}
                                    quantity={orderElement.quantity}
                                    deleteProduct={deleteProduct} />
                            ))
                        }
                        <AddBlock
                            newProductTitle={newProductTitle}
                            newProductPrice={newProductPrice}
                            newProductQuantity={newProductQuantity}
                            updateProductTitle={updateProductTitle}
                            updateProductPrice={updateProductPrice}
                            countPlusInHt={countPlusInHt}
                            countMinusInHt={countMinusInHt}
                            countPlusInKg={countPlusInKg}
                            countMinusInKg={countMinusInKg}
                            unitOfMeasure={unitOfMeasure}
                            updateUnitMeasure={updateUnitMeasure}
                            addProduct={addProduct}
                        />

                    </View>
                </View>

                <DateTimePickerComponent
                    updateDeliveryDate={updateDeliveryDate}
                    updateDeliveryTime={updateDeliveryTime}
                    deliveryDate={deliveryDate}
                    deliveryTime={deliveryTime}
                />

                <View style={styles.adressContainer}>
                    <View style={styles.adressInput}>
                        <Text style={{ color: 'white' }}>Адрес:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => updateDeliveryAdress(newText)}
                            value={deliveryAdress}>
                        </TextInput>
                    </View>
                </View>



                <View style={styles.doneButton}>
                    <TouchableHighlight
                        onPress={sendOrder}>
                        <Text style={{ color: 'white' }}>Готово</Text>
                    </TouchableHighlight>
                </View>

            </ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },

    element: {
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainElement: {
        width: '100%',
        backgroundColor: 'blue',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20
    },
    backgroundContainer: {
        width: '100%',
        marginTop: 10
    },
    ordersContainer: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    adressContainer: {
        width: '100%',
        backgroundColor: 'blue',
        height: 70,
        borderRadius: 20,
        marginVertical: 20,
    },
    adressInput: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        color: 'blue',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    doneButton: {
        backgroundColor: 'green',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        borderRadius: 20,
    },

})



export default MakeOrder;