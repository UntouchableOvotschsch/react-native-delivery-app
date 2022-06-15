import { useLinkProps } from '@react-navigation/native';
import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';



const MainScreen = ({ navigation, name, surname }) => {

    const myOrderIntent = () => {
        navigation.navigate('MyOrders')

    }
    const makeOrderIntent = () => {
        navigation.navigate('MakeOrder')

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>

                </View>

                <View style={styles.fullNameContainer}>
                    <Text style={styles.fullName}>
                        {name + ' ' + surname}
                    </Text>
                </View>
            </View>

            <View style={styles.mainBtnsContainer}>
                <View>
                    <TouchableHighlight
                        style={styles.myOrderBtn}
                        onPress={myOrderIntent}>
                        <Text style={{ color: 'blue' }}>Мои заказы</Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.makeOrderBtn}
                        onPress={makeOrderIntent}>
                        <Text style={{ color: 'white' }}>Сделать заказ</Text>
                    </TouchableHighlight>
                </View>
            </View>


            <View style={styles.supportBtnContainer}>
                <View>
                    <TouchableHighlight style={styles.supportBtn}>
                        <Text style={styles.text}>Связаться со службой {'\n'} поддержки</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={styles.erText}>
                <View>
                    {/* <Text style={{ color: 'blue' }}>При поддержке Единой России</Text> */}
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        height: '100%',
        width: '100%',
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
    mainBtnsContainer: {
        marginTop: 20,
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    myOrderBtn: {
        backgroundColor: 'white',
        padding: 30,
        paddingHorizontal: 40,
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'blue'
    },
    makeOrderBtn: {
        backgroundColor: 'blue',
        padding: 30,
        paddingHorizontal: 40,
        borderRadius: 50
    },
    supportBtnContainer: {
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    supportBtn: {
        backgroundColor: 'blue',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    erText: {
        marginTop: 15,
        alignItems: 'center',
        height: '10%',
        justifyContent: 'center'
    }


})

export default MainScreen