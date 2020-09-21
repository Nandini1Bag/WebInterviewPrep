import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import TopicList from './Components/TopicList/TopicList.js'

export default function App() {

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{'All Topics'}</Text>
      <TopicList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1fc8db',
   alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4f603c',
    fontSize:'30px',
    fontWeight: "bold"
 }
});
