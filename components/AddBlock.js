import React, { useEffect } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
    Button
} from 'react-native';




const AddBlock = (props) => {

    useEffect(()=>{
        if(props.newProductQuantity===0){
            props.updateUnitMeasure('')
        }
    })


    return (
        <View style={styles.addBlock}>

            <View>

                <View>
                    <View>
                        <Text>Введите название продукта</Text>
                        <View style={styles.addElement}>
                            <TextInput
                                style={styles.input}
                                value={props.newProductTitle}
                                onChangeText={newText => props.updateProductTitle(newText)}>
                            </TextInput>


                            <View style={props.unitOfMeasure === 'шт' || props.unitOfMeasure === '' ? styles.countInputInHt : styles.displayNone}>
                                <TouchableHighlight
                                    onPress={props.countPlusInHt}>
                                    <Text style={{ color: 'blue' }}>+</Text>
                                </TouchableHighlight>

                                <View style={styles.count}>
                                    <View>
                                        <Text
                                            style={{ color: 'white' }}>
                                            {props.newProductQuantity + 'шт'}
                                        </Text>
                                    </View>
                                </View>

                                <TouchableHighlight
                                    onPress={props.countMinusInHt}>
                                    <Text style={{ color: 'blue' }}>-</Text>
                                </TouchableHighlight>
                            </View>

                        </View>

                    </View>
                </View>


                <View>
                    <View>
                        <Text>Введите стоимость</Text>
                        <View style={styles.addElement}>
                            <TextInput
                                style={styles.input}
                                value={props.newProductPrice}
                                onChangeText={newText => props.updateProductPrice(newText)}>
                            </TextInput>

                            <View style={props.unitOfMeasure === 'кг' || props.unitOfMeasure === '' ? styles.countInputInKg : styles.displayNone}>
                                <TouchableHighlight
                                    onPress={props.countPlusInKg}>
                                    <Text style={{ color: 'blue' }}>+</Text>
                                </TouchableHighlight>

                                <View style={styles.count}>
                                    <View>
                                        <Text
                                            style={{ color: 'white' }}>
                                            {props.newProductQuantity + 'кг'}
                                        </Text>
                                    </View>
                                </View>

                                <TouchableHighlight
                                    onPress={props.countMinusInKg}>
                                    <Text style={{ color: 'blue' }}>-</Text>
                                </TouchableHighlight>
                            </View>

                        </View>

                    </View>

                </View>

                <View style={styles.addButtonContainer}>
                    <TouchableHighlight style={styles.addButton} onPress={props.addProduct}>
                        <Text style={{ color: 'blue' }}>Добавить</Text>
                    </TouchableHighlight>
                </View>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    addBlock: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'blue',
        width: '70%',
        borderRadius: 20,
        color: 'white',
    },

    addElement: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    countInputInHt: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },

    countInputInKg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    displayNone: {
        display: 'none'
    },
    count: {
        marginHorizontal: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        width: 50,
        alignItems: 'center'
    },
    addButtonContainer: {
        height: 50
    },
    addButton: {
        alignItems: 'center',
        marginTop: 20
    }
})


export default AddBlock