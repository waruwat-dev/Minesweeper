import React from "react";
import { Button, Text } from "react-native-elements";
import { View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const test = ({route, navigation}) => {
const { size, bomb, mode } = route.params;
  const button = ["Offline", "Online", "Ranking Board", "Tutorial"];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{size}</Text>
      <Text>{bomb}</Text>
      <Text>{mode}</Text>
      
    </View>
  );
};
export default test;