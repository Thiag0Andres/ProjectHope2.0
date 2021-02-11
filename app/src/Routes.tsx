import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import SingupScreen from "./pages/SingupScreen";
import ForgotPassword from "./pages/ForgotPassword";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SingupScreen" component={SingupScreen} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
