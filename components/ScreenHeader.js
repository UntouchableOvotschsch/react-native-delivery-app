import { useLinkProps } from '@react-navigation/native';
import React from 'react'

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


const ScreenHeader = ({ navigation, title }) => {
    const goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.header}>
            <Text>Регистрация</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'center'

    },
})

export default ScreenHeader