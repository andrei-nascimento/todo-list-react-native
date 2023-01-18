import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Empty() {
    return (
        <View>
            <Text style={styles.title}>Lista de tarefas vazia...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 24
    }
});