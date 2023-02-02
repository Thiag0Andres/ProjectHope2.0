import React, { useState } from "react";

import { Alert, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import {
  Container,
  ContainerLogin,
  ContainerLogo,
  Logo,
  Input,
  ButtonSingup,
  ButtonTextSingup,
  BackToLogin,
  ButtonBackToLogin,
  ButtonTextBackToLogin,
} from "./styles";

const SignupScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  async function handleSubmit() {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      const body = {
        name: name,
        email: email.trim().toLocaleLowerCase(),
        password: password,
      };

      //console.log(body);

      await api
        .post("/users/register", body)
        .then(async (response) => {
          //console.log(response.data);

          const { result } = response.data;
          const { auth_token } = result;

          //console.log(result, auth_token);

          //Utiliza o AsyncStorage para guardar o token e o user
          await AsyncStorage.multiSet([
            ["@CodeApi:token", auth_token],
            ["@CodeApi:user", JSON.stringify(result)],
          ]);

          Keyboard.dismiss();

          Alert.alert("", "Cadastro efetuado com sucesso!", [
            {
              text: "Ok",
              //Mudança de página ao apertar o Alert
              onPress: () => navigation.navigate("Question1"),
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
    } else {
      Alert.alert("", "Senhas precisam ser iguais.", [
        {
          text: "Ok",
        },
      ]);
    }
  }

  return (
    <Container contentContainerStyle={{ padding: 25, paddingTop: 60 }}>
      <ContainerLogo>
        <Logo source={require("../../assets/icons/logo.png")} />
      </ContainerLogo>

      <Input
        placeholder="Nome"
        placeholderTextColor="#4507A1"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input
        placeholder="E-mail"
        placeholderTextColor="#4507A1"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="Senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Input
        placeholder="Confirmar senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <ButtonSingup onPress={handleSubmit}>
        <ButtonTextSingup>CADASTRAR</ButtonTextSingup>
      </ButtonSingup>

      <ContainerLogin>
        <BackToLogin>POSSUI CADASTRADO?</BackToLogin>

        <ButtonBackToLogin onPress={handleNavigateToLogin}>
          <ButtonTextBackToLogin>FAZER LOGIN</ButtonTextBackToLogin>
        </ButtonBackToLogin>
      </ContainerLogin>
    </Container>
  );
};

export default SignupScreen;
