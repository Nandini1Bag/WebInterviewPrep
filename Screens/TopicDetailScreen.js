import React, { useState,useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { TOPICS } from "../data/dummy-data";
import { AdMobBanner } from "expo-ads-admob";
import Icon from "react-native-vector-icons/FontAwesome";

const ListItem = (props) => {
  const [isShowingAns, setIsShowingAns] = useState(false);
  const [iconName, seticonName] = useState('chevron-down');

  useEffect(() => {
    if(isShowingAns){
     seticonName('chevron-up');
    }else{
      seticonName('chevron-down'); 
    }
  });

  const Validate = () => {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[A-Za-z0-9 ]+$/;
    var answer = props.children.answer;
    let ansProcessedText = null;
    //Validate TextBox value against the Regex.
    var isValid = regex.test(answer);
    if (!isValid) {
      const Arrans = answer.split(/([0-9]+)/); //"Contains Special Characters."
      var rows = [];
      let Ansnum = "";
      for (var i = 0, len = Arrans.length; i < len; i++) {
        if (i === 0) {
          rows.push(
            <Text key={i} style={styles.textans}>
              {Arrans[i]}
            </Text>
          );
        }
        if (Math.abs(i % 2 === 1)) {
          Ansnum = Arrans[i]; //its odd
        }
        if (Math.abs(i % 2 !== 1) && i !== 0) {
          rows.push(
            <Text key={i} style={styles.textans}>
              {Ansnum + Arrans[i]}
            </Text>
          );
        }
      }

      ansProcessedText = rows;
    } else {
      //Does not contain Special Characters.
      ansProcessedText = (
        <Text style={styles.textans}>{props.children.answer}</Text>
      );
    }
    return ansProcessedText;
  };

  let ansText = null;
  if (isShowingAns) {
    ansText = Validate();
  }

  const toggleisShowingAns = () => {
    setIsShowingAns(!isShowingAns);
  };

  const bannerAdId =
    Platform.OS === "ios"
      ? "ca-app-pub-8829581300632627/5912953490"
      : "ca-app-pub-8829581300632627/9856067935";

  const withoutBanner = (
    <TouchableOpacity
      onPress={() => {
        toggleisShowingAns();
      }}
    >
      <View style={styles.listItem}>
        <View style={styles.quesview}>
        <Text style={styles.textques}>{props.children.question}</Text>
        <Icon name={iconName} size={25}></Icon>
        </View>
        <View>{ansText}</View>
      </View>
    </TouchableOpacity>
  );

  const withBanner = (
    <View>
      <View style={styles.bannerview}>
        <AdMobBanner
          style={styles.Banner}
          bannerSize="smartBannerPortrait"
          adUnitID={bannerAdId} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={false}
        />
      </View>
      {withoutBanner}
    </View>
  );

  return (
    <View>
      {props.count !== 0 && props.count % 9 === 0 ? withBanner : withoutBanner}
    </View>
  );
};

const TopicDetailScreen = (props) => {
  const topicname = props.navigation.getParam("topicname");
  const selectedTopic = TOPICS.find((topic) => topic.name === topicname);

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>{selectedTopic.title}</Text>
      {selectedTopic.questions.map((param, i) => (
        <ListItem key={`question-item-${i}`} count={i}>
          {param}
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    fontFamily: "open-sans-bold",
    padding: 15,
    fontSize: 24,
    letterSpacing: 5,
    textDecorationLine: "underline",
    textShadowColor: "#D50000",
    textShadowRadius: 4,
    textShadowOffset: { width: 1, height: 1 },
    textAlign: "center",
    color: "#d9f9b1",
  },
  textques: {
    paddingBottom: 5,
    paddingRight: 6,
    flexDirection: 'column',
    flex: 1,
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  textans: {
    paddingRight: 9,
    flexDirection: 'column',
    flex: 1,
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  quesview:{
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  listItem: {
    backgroundColor: "#d9f9b1",
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderRadius: 4,
    shadowColor: "#000",
    borderWidth: 1,
    padding: 15,
  },
  bannerview: {
    marginVertical: 10,
    height: (Platform.OS === 'ios') ? 50 : 90,
    backgroundColor: "#d9f9b1",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    flex: 1,
  },
  Banner: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default TopicDetailScreen;
