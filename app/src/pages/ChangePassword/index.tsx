import React, { useState } from "react";

import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import {
  Container,
  Content,
  ContainerLogo,
  Logo,
  ButtonArrow,
  BackArrow,
  Input,
  Button,
  ButtonText,
} from "./styles";

const ChangePassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
      token: token,
      password: password,
    };

    //console.log(body);

    api
      .post("/users/resetPassword", body)
      .then((response) => {
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
    <Container contentContainerStyle={{ padding: 25, paddingTop: 60 }}>
      <ButtonArrow onPress={handleNavigateToForgotPassword}>
        <BackArrow
          resizeMode="contain"
          source={require("../../assets/icons/ic_back.png")}
        />
      </ButtonArrow>

      <ContainerLogo>
        <Logo source={require("../../assets/icons/logo.png")} />
      </ContainerLogo>

      <Content>
        <Input
          placeholder="Digite o seu email"
          placeholderTextColor="#4507A1"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Digite o código recebido"
          placeholderTextColor="#4507A1"
          value={token}
          onChangeText={(text) => setToken(text)}
        />
        <Input
          placeholder="Digite sua nova senha"
          secureTextEntry={true}
          placeholderTextColor="#4507A1"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Content>

      <Button onPress={handleSubmit}>
        <ButtonText>REDEFINIR SENHA</ButtonText>
      </Button>
    </Container>
  );
};

export default ChangePassword;
