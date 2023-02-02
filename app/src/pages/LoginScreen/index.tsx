import React, { useEffect, useState } from "react";

import { Alert, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import {
  Container,
  ContainerLogo,
  Logo,
  Input,
  ButtonLogin,
  ButtonText,
  ButtonForgotPassword,
  ButtonTextForgotPassword,
  NewUser,
  ButtonNewUser,
  ButtonTextNewUser,
} from "./styles";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SignupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  async function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
      password: password,
    };

    //console.log(body);

    await api
      .post("/users/authenticate", body)
      .then(async (response) => {
        //console.log(response.data);

        const { user, token } = response.data;

        //Utiliza o AsyncStorage para guardar o token e o user
        await AsyncStorage.multiSet([
          ["@CodeApi:token", token],
          ["@CodeApi:user", JSON.stringify(user)],
        ]);

        Keyboard.dismiss();

        setEmail("");
        setPassword("");

        Alert.alert("", "Login efetuado com sucesso!", [
          {
            text: "Ok",
            //Mudança de página ao apertar o Alert
            onPress: () => navigation.navigate("Home"),
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
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
      <ContainerLogo>
        <Logo source={require("../../assets/icons/logo.png")} />
      </ContainerLogo>

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

      <ButtonLogin onPress={handleSubmit}>
        <ButtonText>ENTRAR</ButtonText>
      </ButtonLogin>
      <ButtonForgotPassword onPress={handleNavigateToForgotPassword}>
        <ButtonTextForgotPassword>ESQUECI MINHA SENHA</ButtonTextForgotPassword>
      </ButtonForgotPassword>

      <NewUser>NÃO POSSUI CONTA?</NewUser>
      <ButtonNewUser onPress={handleNavigateToCreateAccount}>
        <ButtonTextNewUser>CRIAR NOVA CONTA</ButtonTextNewUser>
      </ButtonNewUser>
    </Container>
  );
};

export default LoginScreen;
