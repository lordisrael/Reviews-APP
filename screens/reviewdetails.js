import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import { largerText } from "../styles/larger";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  const pressHandler = () => {
    //navigation.push("ReviewDetails");
    navigation.goBack();
  };
  //const rating = navigation.getParam('rating')
  const { title, body, rating } = route.params;

  //<Text style={largerText.text}>ReviewDetails Screen</Text>

  return (
    <SafeAreaView style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating: </Text>
          <Image source={images.ratings[rating]}></Image>
        </View>
      </Card>
      <Button title="go to home" onPress={pressHandler} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    rating: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 8,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee'
    }
})