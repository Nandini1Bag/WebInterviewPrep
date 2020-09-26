import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TopicCategoriesScreen from '../Screens/TopicCategoriesScreen';
import TopicDetailScreen from '../Screens/TopicDetailScreen';
import LandingScreen from '../Screens/LandingScreen';

const TopicsNavigator = createStackNavigator({
  WELCOME:LandingScreen,
  CATEGORY: {
    screen: TopicCategoriesScreen, 
    navigationOptions: {
        title: 'CATEGORY',
        headerLeft: null,
    },
},
  QUESTIONS: TopicDetailScreen
});

export default createAppContainer(TopicsNavigator);
