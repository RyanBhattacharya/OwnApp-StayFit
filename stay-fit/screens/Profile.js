import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        
         source={require("../assets/Image5.jpg")}
  style={styles.iconImage}
        ></Image>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
   iconImage: {
    width: 350,
    height:300,
    
  }
});



 

