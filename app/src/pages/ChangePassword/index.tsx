import React, { useState } from "react";

import {
  Image,
  TextInput,
  Text,
  View,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import { styles } from "./styles";

const ChangePassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  async function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
      token: token,
      password: password,
    };

    //console.log(body);

    await api
      .post("/users/resetPassword", body)
      .then(async (response) => {
        //console.log(response.data);

        Keyboard.dismiss();

        setEmail("");
        setToken("");
        setPassword("");

        Alert.alert("", "Senha trocada com sucesso!", [
          {
            text: "Ok",
            //Mudança de página ao apertar o Alert
            onPress: () => navigation.navigate("LoginScreen"),
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
        onPress={handleNavigateToForgotPassword}
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

      <View>
        <TextInput
          placeholder="Digite o seu email"
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>

        <TextInput
          placeholder="Digite o código recebido"
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
          value={token}
          onChangeText={(text) => setToken(text)}
        ></TextInput>

        <TextInput
          placeholder="Digite sua nova senha"
          secureTextEntry={true}
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>

      <RectButton onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>REDEFINIR SENHA</Text>
      </RectButton>
    </ScrollView>
  );
};

export default ChangePassword;
