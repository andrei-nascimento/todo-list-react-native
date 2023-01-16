import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'

export default function Input({ submitHandler }) {
    const [value, setValue] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };

    const handleAddHabit = () => {
        setValue(submitHandler(value));
        setValue("");
        Keyboard.dismiss();
    };

    return (
        <View>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder='Adicione uma tarefa...'
                    placeholderTextColor='#bbbb'
                    value={value}
                    onChangeText={onChangeText}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 240,
        color: 'white',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontSize: 16
    },
    button: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingVertical: 12,
        marginTop: 24
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
}) 