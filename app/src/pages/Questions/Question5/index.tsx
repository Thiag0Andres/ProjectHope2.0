import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { iStore } from "../../../store";
import { data } from "./data";
import api from "../../../services/api";
import {
  Container,
  ContainerBottom,
  Text,
  Title,
  Card,
  Icon,
  Button,
  ButtonText,
  SecondaryButton,
} from "./styles";

const Question5 = () => {
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
      relationship_family: selectedItems[0],
    };

    api
      .put(`/users/update/${user.id}`, body)
      .then((response) => {
        //console.log(response.data);

        navigation.navigate("Home");
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
        <Text>Pergunta 05 de 05</Text>
        <Title>Como você descreveria a sua relação com a família?</Title>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <Card
                key={item.id}
                onPress={() => handleSelectItem(item.value)}
                isClicked={selectedItems.includes(item.value)}
              >
                <Icon
                  resizeMode="contain"
                  source={
                    selectedItems.includes(item.value)
                      ? item.image_url_hover
                      : item.image_url
                  }
                />
              </Card>
            );
          }}
        />
      </Container>

      <ContainerBottom>
        <Button onPress={handleSubmit}>
          <ButtonText>CONCLUIR QUESTIONÁRIO</ButtonText>
        </Button>
        <SecondaryButton onPress={handleNavigateToHome}>
          <ButtonText>RESPONDER MAIS TARDE</ButtonText>
        </SecondaryButton>
      </ContainerBottom>
    </>
  );
};

export default Question5;
