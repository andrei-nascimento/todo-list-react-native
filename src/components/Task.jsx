import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export default function Task({ item, deleteItem }) {
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    };

    return (
        <View 
            style={[
                styles.taskContainer, 
                {backgroundColor: check === false ? "#165ca1" : "green"}
            ]}
        >
            {
                check === false ? (
                    <TouchableOpacity style={styles.checkCircle} onPress={handleCheck} />
                ) : (
                    <TouchableOpacity onPress={handleCheck}>
                        <Image 
                            style={styles.checkImage}
                            source={require("../assets/check.png")} />
                    </TouchableOpacity>
                )
            }
            <View>
                <Text style={styles.taskTitle}>{item.value}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
                <Image 
                style={styles.trashImage} 
                source={require("../assets/trash.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
    },
    checkCircle: {
        borderWidth: 1,
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: 'white'
    },
    taskTitle: {
        color: 'white',
        fontSize: 18,
        minWidth: 200,
        maxHeight: 200,
        paddingHorizontal: 16,
    },
    checkImage: {
        width: 24,
        height: 24
    },
    trashImage: {
        width: 18,
        height: 18
    }
});