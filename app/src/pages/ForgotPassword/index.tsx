import React, { useState } from "react";

import { Alert, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import {
  Container,
  ContainerLogo,
  Logo,
  ButtonArrow,
  BackArrow,
  Input,
  Button,
  ButtonText,
} from "./styles";

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
    <Container contentContainerStyle={{ padding: 25, paddingTop: 60 }}>
      <ButtonArrow onPress={handleNavigateToLogin}>
        <BackArrow
          resizeMode="contain"
          source={require("../../assets/icons/ic_back.png")}
        />
      </ButtonArrow>

      <ContainerLogo>
        <Logo source={require("../../assets/icons/logo.png")} />
      </ContainerLogo>

      <Input
        placeholder="Digite seu email para envio do código"
        placeholderTextColor="#4507A1"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button onPress={handleSubmit}>
        <ButtonText>ENVIAR CÓDIGO</ButtonText>
      </Button>
    </Container>
  );
};

export default ForgotPassword;
