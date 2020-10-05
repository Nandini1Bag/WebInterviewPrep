import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet ,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {AdMobBanner} from 'expo-ads-admob';

class TopicCategoriesScreen extends Component {

   bannerAdId=Platform.OS==='ios'?"ca-app-pub-8829581300632627/8692225736":"ca-app-pub-8829581300632627/1473061321";

   state = {
      topics: [
         {
            id: 0,
            name: 'Html',
         },
         {
            id: 1,
            name: 'Css',
         },
         {
            id: 2,
            name: 'Javascript',
         },
         {
            id: 3,
            name: 'ReactJs',
         }
      ]
   }



   render() {
      return (
         <View  style = {styles.viewcontainer}>
            {
               this.state.topics.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => {
                        this.props.navigation.navigate(
                            {routeName: 'QUESTIONS',
                            params: {
                                topicname: item.name
                              }
                        });
                    }}>       
                    <View style={styles.topicview}> 
                     <Text style = {styles.text}>
                        {item.name}              
                     </Text>
                     <Icon name="chevron-right" size={25} >
                     </Icon> 
                     </View>             
                  </TouchableOpacity>
               ))
            }
            <View style={styles.bannerview}>
            <AdMobBanner
             style={styles.Banner}
             bannerSize="mediumRectangle"
             adUnitID={this.bannerAdId} // Test ID, Replace with your-admob-unit-id
             servePersonalizedAds={false} />
            </View>
         
         </View>
      )
   }
}
export default TopicCategoriesScreen

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      backgroundColor: '#d9f9b1',
      borderWidth: 1,
      borderRadius: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      alignItems: 'center',
   },
   viewcontainer: {
      flex: 1,
      padding:5
    },
   text: {
      color: '#4f603c',
      fontWeight: "bold",
      fontSize:30,
      flex: 1
   },
   topicview:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 300 
  },
  bannerview:{
   flex: 1,
   justifyContent: 'flex-end',
   marginBottom: 53
 },
 Banner: {
  justifyContent:"center",
  alignSelf:"center"
}
})