import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { iStore } from "../../../store";

import api from "../../../services/api";
import {
  Container,
  ContainerBottom,
  Text,
  Title,
  Input,
  Button,
  ButtonText,
  SecondaryButton,
} from "./styles";

const Question3 = () => {
  const navigation = useNavigation();
  const { user } = useSelector((store: iStore) => store.user);

  const [age, setAge] = useState("");

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  function handleSubmit() {
    const body = {
      age: Number(age),
    };
    api
      .put(`/users/update/${user.id}`, body)
      .then((response) => {
        //console.log(response.data);

        navigation.navigate("Question4");
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
    <>
      <Container>
        <Text>Pergunta 03 de 05</Text>
        <Title>Qual sua idade?</Title>

        <Input
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </Container>
      <ContainerBottom>
        <Button onPress={handleSubmit}>
          <ButtonText>PRÓXIMA PERGUNTA</ButtonText>
        </Button>
        <SecondaryButton onPress={handleNavigateToHome}>
          <ButtonText>RESPONDER MAIS TARDE</ButtonText>
        </SecondaryButton>
      </ContainerBottom>
    </>
  );
};

export default Question3;
