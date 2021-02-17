import React from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Olá Thiago</Text>
          <Text>segunda, 04 de julho</Text>
        </View>
      </View>

      <View style={styles.body}></View>
    </ScrollView>
  );
};

export default Home;
