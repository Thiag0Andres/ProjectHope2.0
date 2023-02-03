import React, { useState } from "react";
import { Alert } from "react-native";
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
} from "./styles";

const Question1 = () => {
  const navigation = useNavigation();
  const { user } = useSelector((store: iStore) => store.user);

  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

  const handleSelectItem = (value: string) => {
    setSelectedItems([value]);
  };

  async function handleSubmit() {
    const body = {
      user_type: selectedItems[0],
    };

    await api
      .put(`/users/update/${user.id}`, body)
      .then(async (response) => {
        //console.log(response.data);

        navigation.navigate("Question2");
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
        <Text>Pergunta 01 de 05</Text>
        <Title>Com qual destes perfis você mais se identifica?</Title>

        {data.map((info) => (
          <Card
            key={info.id}
            onPress={() => handleSelectItem(info.value)}
            isClicked={selectedItems.includes(info.value)}
          >
            <Icon
              resizeMode="contain"
              source={
                selectedItems.includes(info.value)
                  ? info.image_url_hover
                  : info.image_url
              }
            />

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
      </ContainerBottom>
    </>
  );
};

export default Question1;
