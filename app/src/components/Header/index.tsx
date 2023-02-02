import React, { useEffect, useState } from "react";

import { Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

interface User {
  name: string;
}

const Header = () => {
  const navigation = useNavigation();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>();

  const Logout = () => {
    AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  const getToken = async () => {
    const token = AsyncStorage.getItem("@CodeApi:token");

    if (token) {
      setToken(String(token));
    }
  };

  const getUser = async () => {
    const user: any = await AsyncStorage.getItem("@CodeApi:user");
    const userParser = JSON.parse(user);

    if (userParser) {
      setUser(userParser);
    }
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        {user && <Text style={styles.title}>Olá {user.name}</Text>}
        <Text style={styles.text}>Sexta, 19 de fevereiro</Text>
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
