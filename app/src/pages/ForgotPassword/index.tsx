import React, { useState } from "react";

import {
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  Alert,
  Keyboard,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import { styles } from "./styles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const [email, setEmail] = useState("");

  async function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
    };

    //console.log(body);

    await api
      .post("/users/forgotPassword", body)
      .then(async (response) => {
        //console.log(response.data);

        Keyboard.dismiss();

        setEmail("");

        Alert.alert("", "Token enviado para seu email!", [
          {
            text: "Ok",
            //Mudança de página ao apertar o Alert
            onPress: () => navigation.navigate("ChangePassword"),
          },
        ]);
      })
      .catch((error) => {
        console.log("error:", error.response.data.message);
        Alert.alert("", error.response.data.message, [
          {
            text: "Ok",
          },
        ]);
      });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 25, paddingTop: 60 }}
    >
      <BorderlessButton
        style={styles.buttonArrow}
        onPress={handleNavigateToLogin}
      >
        <Image
          style={styles.backArrow}
          source={require("../../assets/icons/ic_back.png")}
        />
      </BorderlessButton>

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logo.png")}
        />
      </View>

      <TextInput
        placeholder="Digite seu email para envio do código"
        placeholderTextColor="#4507A1"
        style={styles.placeholder}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <RectButton style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ENVIAR CÓDIGO</Text>
      </RectButton>
    </ScrollView>
  );
};

export default ForgotPassword;
