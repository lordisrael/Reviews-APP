import "react-native-gesture-handler"; //this should be the first import in your code
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Header from "../shared/header";
import HeaderRD from "../shared/headerRD";

import About from "../routes/aboutStack";
import Home from "../routes/homeStack";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Gamezone"
          component={Home}
          options={{
            //title: "Gamezone", // Set the title of the header
            headerTitle: () => <Header />,
            //headerTitle: "", // Hide the title for ReviewDetails screen
            
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            //title: "About Gamezone", // Set the title of the header
            headerTitle: () => <HeaderRD />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

{/* <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="About" component={About} />
</Drawer.Navigator>; */}
