import React from "react";

import { useSelector } from "react-redux";
import { iStore } from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import Question1 from "./pages/Questions/Question1";
import Question2 from "./pages/Questions/Question2";
import Question3 from "./pages/Questions/Question3";
import Question4 from "./pages/Questions/Question4";
import Question5 from "./pages/Questions/Question5";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  const { user } = useSelector((store: iStore) => store.user);
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {user.token ? (
          <Screen name="Home" component={Home} />
        ) : (
          <>
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="SignupScreen" component={SignupScreen} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
            <Screen name="ChangePassword" component={ChangePassword} />

            <Screen name="Question1" component={Question1} />
            <Screen name="Question2" component={Question2} />
            <Screen name="Question3" component={Question3} />
            <Screen name="Question4" component={Question4} />
            <Screen name="Question5" component={Question5} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
