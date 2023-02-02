import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/ducks/user/actions";

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
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SignupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
      password: password,
    };

    api
      .post("/users/authenticate", body)
      .then((response) => {
        const { user, token } = response.data;

        dispatch(updateUser({ user: { ...user, token: token } }));

        Keyboard.dismiss();

        setEmail("");
        setPassword("");

        Alert.alert("", "Login efetuado com sucesso!", [
          {
            text: "Ok",
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
