import React from 'react';
import {View, ScrollView, Text, StyleSheet } from 'react-native';
import { TOPICS } from '../data/dummy-data';

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };
  

const TopicDetailScreen = props => {

    const topicname = props.navigation.getParam('topicname');
    const selectedTopic = TOPICS.find(topic => topic.name === topicname);

  return (
    <ScrollView>
       <Text style={styles.title}>{selectedTopic.title}</Text>
       {selectedTopic.questions.map(question => (
        <ListItem key={question}>{question}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default TopicDetailScreen;
