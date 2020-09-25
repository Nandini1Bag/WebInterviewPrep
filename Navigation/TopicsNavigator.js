import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TopicCategoriesScreen from '../Screens/TopicCategoriesScreen';
import TopicDetailScreen from '../Screens/TopicDetailScreen';

const TopicsNavigator = createStackNavigator({
  CATEGORY: TopicCategoriesScreen,
  TopicDetail: TopicDetailScreen
});

export default createAppContainer(TopicsNavigator);
