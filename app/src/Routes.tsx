import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import SingupScreen from "./pages/SingupScreen";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SingupScreen" component={SingupScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
