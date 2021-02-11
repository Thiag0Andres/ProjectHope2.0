import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import SingupScreen from "./pages/SingupScreen";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SingupScreen" component={SingupScreen} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="ChangePassword" component={ChangePassword} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
