import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TopicCategoriesScreen from "../Screens/TopicCategoriesScreen";
import TopicDetailScreen from "../Screens/TopicDetailScreen";
//import LandingScreen from "../Screens/LandingScreen";
import { Platform } from "react-native";

const TopicsNavigator = createStackNavigator({
 // WELCOME: LandingScreen,
  CATEGORY: {
    screen: TopicCategoriesScreen,
    navigationOptions: {
      title: "CATEGORY",
      //headerLeft: null,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
      },
    },
  },
  QUESTIONS: {
    screen: TopicDetailScreen,
    navigationOptions: {
      title: "INTERVIEW QUESTIONS",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: (Platform.OS === 'ios') ? 21 : 25,
      },
    },
  },
});

export default createAppContainer(TopicsNavigator);
