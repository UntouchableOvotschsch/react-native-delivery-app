import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
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



const DateTimePickerComponent = (props) => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date')

    const showDatePicker = () => {
        setMode('date')
        setIsPickerShow(true);
    };
    const showTimePicker = () => {
        setMode('time')
        setIsPickerShow(true);
    };
    const onChange = (event, value) => {
        setDate(value);

        let tempDate = new Date(value)
        let fDate = (tempDate.getDate()<10?'0':'')+tempDate.getDate()+'.'+(tempDate.getMonth()<10?'0':'')+(tempDate.getMonth()+1)+'.'+tempDate.getFullYear()
        let fTime = (tempDate.getHours()<10?'0':'')+tempDate.getHours()+':'+(tempDate.getMinutes()<10?'0':'')+tempDate.getMinutes()
        props.updateDeliveryDate(fDate)
        props.updateDeliveryTime(fTime)

        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    return (
        <View style={styles.dateTimePicker}>
            <Text style={{ color: 'white' }}>Дата:</Text>
            <View style={styles.dateTimePicker}>
                {props.deliveryDate === '' ?
                    <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
                        <Text style={{color: 'blue'}}>Выбрать дату</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
                        <Text style={{color: 'blue'}}>{props.deliveryDate}</Text>
                    </TouchableOpacity>
                }
                {props.deliveryTime === '' ?
                    <TouchableOpacity style={styles.timeInput} onPress={showTimePicker}>
                        <Text style={{color: 'blue'}}>Выбрать время</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.timeInput} onPress={showTimePicker}>
                        <Text style={{color: 'blue'}}>{props.deliveryTime}</Text>
                    </TouchableOpacity>
                }

                {isPickerShow && (
                    <DateTimePicker
                        value={date}
                        mode={mode}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    dateTimePicker:{
        padding: 10,
        backgroundColor: 'blue',
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInput:{
        backgroundColor: 'white',
        width: 130,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center'
    },
    timeInput:{
        backgroundColor: 'white',
        width: 130,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center'
    }
})

export default DateTimePickerComponent;