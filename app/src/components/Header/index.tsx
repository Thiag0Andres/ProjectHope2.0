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

const Header = () => {
  const navigation = useNavigation();

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.title}>Olá Thiago</Text>
        <Text style={styles.text}>Segunda, 19 de fevereiro</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/avatar_default.png")}
        ></Image>
      </View>
    </View>
  );
};

export default Header;
