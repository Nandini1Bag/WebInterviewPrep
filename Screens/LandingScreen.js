import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LandingScreen extends React.Component {

    componentDidMount() {
        this.timeoutHandle =  setTimeout(() => {
            this.props.navigation.navigate(
                {routeName: 'CATEGORY'});
          }, 2000);
      }

     componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }
   
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2}>Web Developer Interview Questions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
      alignItems: 'center',
      width: '100%',
    },
    h2: {
      color: '#d9f9b1',
      fontSize: 40,
      padding:25,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    },
  });