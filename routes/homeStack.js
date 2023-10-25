import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../shared/header";
//import { IconButton } from "react-native-paper";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewdetails";

const headerStyle = {
  //backgroundColor: "#2c3e50", // Set the background color of the header
  backgroundColor: "#f5f5f5",
  headerTintColor: "#ffffff", // Set the text color of the header
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          //title: "About Gamezone", // Set the title of the header
          //headerTitle: () => <Header />,
          //headerStyle: headerStyle, // Set the text color of the header
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          //title: "Review Details", // Set the title of the header
          //headerTitle: () => <Header />,
          //headerStyle: headerStyle, // Set the text color of the header
          headerShown: false,
          // headerTitle: "", // Hide the title for ReviewDetails screen
          // headerLeft: () => (
          //   <Header showBackButton={true} /> // Use a custom header with a back button icon
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetails: {
//         screen: ReviewDetails
//     }
// }

// const HomeStack = createStackNavigator(screens)

// export default createAppContainer(HomeStack)