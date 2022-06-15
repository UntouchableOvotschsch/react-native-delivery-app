import React from "react";

import { View, Text, StyleSheet} from 'react-native'

const Loader = ({text}) => {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 100,
        width: 100
    }
})

export default Loader