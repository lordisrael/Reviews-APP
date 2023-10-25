import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./routes/drawer";

SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

      try {
        // await Font.loadAsync({
        //   "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        // });
        await getFonts();
        setFontsLoaded(true); // Set fontsLoaded to true when fonts are loaded
      } catch (error) {
        console.error("Error loading fonts:", error);
      } finally {
        SplashScreen.hideAsync(); // Hide the splash screen when loading is done
      }
    };

    loadFonts();
  }, []); // Load fonts only once when the component mounts

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    // You can render a loading indicator here if needed
    return null;
  }
}
