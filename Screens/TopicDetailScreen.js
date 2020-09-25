import React,{useState} from 'react';
import {View, ScrollView, TouchableOpacity,Text, StyleSheet } from 'react-native';
import { TOPICS } from '../data/dummy-data';

const ListItem = props => {
  const [isShowingAns, setIsShowingAns] = useState(false);

  let ansText=null;
  if (isShowingAns) {
    ansText= (<Text style={styles.textans}>{props.children.answer}</Text>);
  }

  const toggleisShowingAns = ()=> {
    setIsShowingAns(!isShowingAns);
}
    return (
      <TouchableOpacity onPress={()=>{toggleisShowingAns()}}>
      <View style={styles.listItem}>
        <Text style={styles.textques}>{props.children.question}</Text>
        <View>
        {ansText}
        </View>
      </View>
      </TouchableOpacity>
    );
  };
  

const TopicDetailScreen = props => {
 
    const topicname = props.navigation.getParam('topicname');
    const selectedTopic = TOPICS.find(topic => topic.name === topicname);

  return (
    <ScrollView>
       <Text style={styles.title}>{selectedTopic.title}</Text>
       {selectedTopic.questions.map((param,i) => (
       <ListItem key={i}>{param}</ListItem>
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
    padding:8,
    fontSize: 22,
    textAlign: 'center'
  },
  textques:{
    paddingBottom:6,
    fontFamily: 'open-sans-bold',
    fontSize: 15
  },
  textans:{
    fontFamily: 'open-sans-bold',
    fontSize: 15
  },
  listItem: {
    backgroundColor: '#d9f9b1',
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderRadius: 4,
    shadowColor: '#000',
    borderWidth: 1,
    padding: 10
  }
});

export default TopicDetailScreen;
