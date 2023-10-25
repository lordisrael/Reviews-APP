import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zeilda, breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Delicious Dinner Experience",
      rating: 1,
      body: "The food was amazing",
      key: 2,
    },
    {
      title: "Incredible Movie Night",
      rating: 3,
      body: "This movie is an absolute must-see!",
      key: 3,
    },
    {
      title: "A Wonderful Weekend Getaway",
      rating: 4,
      body: "Our stay at the resort was fantastic.",
      key: 4,
    },
    {
      title: "Awesome New Smartphone",
      rating: 2,
      body: "This phone has all the features I was looking for",
      key: 5,
    },
    {
      title: "Great Fitness Tracker",
      rating: 4,
      body: "I have been using this fitness tracker for a month",
      key: 6,
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return[review, ...currentReviews]
    })
    setModalOpen(false)
  }

  // const preessHandler = () => {
  //     //navigation.push("ReviewDetails");
  //     navigation.navigate("ReviewDetails");
  // }
  //<Button title="go to review" onPress={preessHandler}/>
  //<Text style={globalStyles.titleText}>Home Screen</Text>

  return (
    <SafeAreaView style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  }, 
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }, 
  modalContent: {
    flex: 1
  }
});
