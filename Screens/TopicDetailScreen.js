import React,{useState} from 'react';
import {View, ScrollView, TouchableOpacity,Text, StyleSheet } from 'react-native';
import { TOPICS } from '../data/dummy-data';

const ListItem = props => {
  const [isShowingAns, setIsShowingAns] = useState(false);

  const Validate=()=> {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[A-Za-z0-9 ]+$/
    var answer=props.children.answer;
    let ansProcessedText=null;
    //Validate TextBox value against the Regex.
    var isValid = regex.test(answer);
  if (!isValid) {   
      const Arrans = answer.split(/([0-9]+)/) //"Contains Special Characters."
       var rows = [];
       let Ansnum='';
     for (var i = 0, len = Arrans.length; i < len; i++) {
         if (i===0){
          rows.push(<Text key={i} style={styles.textans}>{Arrans[i]}</Text>);
         };
         if (Math.abs(i%2===1)){
            Ansnum=Arrans[i]; //its odd
         };
         if(Math.abs(i%2!==1)&&(i!==0)){ 
          rows.push(<Text key={i} style={styles.textans}>{Ansnum+Arrans[i]}</Text>);
         }
       };

       ansProcessedText=(rows);
    } else {
       //Does not contain Special Characters.
      ansProcessedText=(<Text style={styles.textans}>{props.children.answer}</Text>);
    }
    return ansProcessedText;
}

  let ansText=null;
  if (isShowingAns) {
    ansText= Validate();
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
