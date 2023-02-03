import React, { useState } from "react";
import { Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { iStore } from "../../../store";
import { data } from "./data";

import api from "../../../services/api";
import {
  Container,
  ContainerBottom,
  ContainerText,
  Card,
  Icon,
  Text,
  Title,
  TitleCard,
  Button,
  ButtonText,
  SecondaryButton,
} from "./styles";

const Question2 = () => {
  const navigation = useNavigation();
  const { user } = useSelector((store: iStore) => store.user);

  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const handleSelectItem = (value: string) => {
    setSelectedItems([value]);
  };

  function handleSubmit() {
    const body = {
      relationship_drugs: selectedItems[0],
    };

    api
      .put(`/users/update/${user.id}`, body)
      .then((response) => {
        //console.log(response.data);

        navigation.navigate("Question3");
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
        <Text>Pergunta 02 de 05</Text>
        <Title>Como você se descreveria a sua relação com a droga?</Title>

        {data.map((info) => (
          <Card
            key={info.id}
            onPress={() => handleSelectItem(info.value)}
            isClicked={selectedItems.includes(info.value)}
          >
            <ContainerText>
              <TitleCard isClicked={selectedItems.includes(info.value)}>
                {info.title}
              </TitleCard>
              <Text isClicked={selectedItems.includes(info.value)}>
                {info.description}
              </Text>
            </ContainerText>
          </Card>
        ))}
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

export default Question2;
