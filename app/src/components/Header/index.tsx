import React from "react";

import {
  Image,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Header = () => {
  const navigation = useNavigation();

  const Logout = () => {
    AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.title}>Olá Thiago</Text>
        <Text style={styles.text}>Segunda, 19 de fevereiro</Text>
      </View>
      <TouchableOpacity onPress={Logout} style={styles.containerImage}>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/avatar_default.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
