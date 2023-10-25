import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/about";

const headerStyle = {
  //backgroundColor: "#2c3e50", // Set the background color of the header
  backgroundColor: "#f5f5f5",
  headerTintColor: "#ffffff", // Set the text color of the header
};

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About Screen"
        component={About}
        options={{
          // title: "About GameZone", // Set the title of the header
          // headerStyle: headerStyle, // Set the text color of the header
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
