import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Empty from './src/components/Empty';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Task from './src/components/Task';

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTask) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTask
      ];
    });
  };

  const deleteItem = (key) => {
    setData(prevTask => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data} 
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        renderItem={({item}) => <Task item={item} deleteItem={deleteItem} />}
      />
      <View>
        <Input submitHandler={submitHandler} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    paddingVertical: 60
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  }
});
