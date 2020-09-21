import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TopicCategoriesScreen from '../Screens/TopicCategoriesScreen';
import CssScreen from '../Screens/CssScreen';

const TopicsNavigator = createStackNavigator({
  Categories: TopicCategoriesScreen,
  CssScreen: CssScreen
});

export default createAppContainer(TopicsNavigator);
