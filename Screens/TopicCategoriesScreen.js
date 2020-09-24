import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class TopicCategoriesScreen extends Component {
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
         <View>
            {
               this.state.topics.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => {
                        this.props.navigation.navigate(
                            {routeName: 'TopicDetail',
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
         </View>
      )
   }
}
export default TopicCategoriesScreen

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
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
  }
})