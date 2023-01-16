import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>Easy ToDo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});