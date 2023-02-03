import React, { useState } from "react";
import { Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
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
  ContentInputSelect,
  Select,
  Button,
  ButtonText,
  SecondaryButton,
  TextSelectedItem,
} from "./styles";

const Question4 = () => {
  const navigation = useNavigation();
  const { user } = useSelector((store: iStore) => store.user);

  const [timeWithoutDrugs, setTimeWithoutDrugs] = useState("");
  const [selectedValue, setSelectedValue] = useState();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  function handleSubmit() {
    const body = {
      time_without_drugs: String(timeWithoutDrugs + " " + selectedValue),
    };

    api
      .put(`/users/update/${user?.id}`, body)
      .then((response) => {
        //console.log(response.data);

        navigation.navigate("Question5");
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
        <Text>Pergunta 04 de 05</Text>
        <Title>Há quanto tempo você não utiliza drogas?</Title>
        <ContentInputSelect>
          <Input
            keyboardType="numeric"
            value={timeWithoutDrugs}
            onChangeText={(text) => setTimeWithoutDrugs(text)}
          />
          <Select onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            <Picker.Item label="" value="" />
            <Picker.Item
              label="Dia"
              value={Number(timeWithoutDrugs) == 1 ? "dia" : "dias"}
            />
            <Picker.Item
              label="Mês"
              value={Number(timeWithoutDrugs) == 1 ? "mês" : "meses"}
            />
            <Picker.Item
              label="Ano"
              value={Number(timeWithoutDrugs) == 1 ? "ano" : "anos"}
            />
            <Picker.Item label="" value="" />
          </Select>
          <TextSelectedItem>{selectedValue}</TextSelectedItem>
        </ContentInputSelect>
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

export default Question4;
