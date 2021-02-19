import React, { useEffect, useState } from "react";

import { Text, TouchableOpacity, View, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import api from "../../../services/api";

interface Type {
  id: number;
  title: string;
  value: string;
  description: string;
}

interface User {
  id: number;
}

const Question2 = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState<User>();
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
  const [userDescription, setUserDescription] = useState<Array<any>>([
    {
      id: 1,
      title: "Muito dependente",
      value: "very dependent",
      description: "Não tenho mais controle algum sobre meu consumo de drogas.",
    },
    {
      id: 2,
      title: "Dependente",
      value: "dependent",
      description:
        "Sinto que ainda tenho algum controle, mas não sei até quando conseguirei.",
    },
    {
      id: 3,
      title: "Pouco dependente",
      value: "little dependent",
      description:
        "Consigo levar uma vida normal a maior parte do tempo, mas tenho recaídas.",
    },
  ]);

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const handleSelectItem = (value: string) => {
    //console.log("teste", value);
    setSelectedItems([value]);
  };

  const getUser = async () => {
    const user: any = await AsyncStorage.getItem("@CodeApi:user");
    const userParser = JSON.parse(user);

    if (userParser) {
      setUser(userParser);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  async function handleSubmit() {
    const body = {
      relationship_drugs: selectedItems[0],
    };

    //console.log(body);

    await api
      .put(`/users/update/${user?.id}`, body)
      .then(async (response) => {
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
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 02 de 05</Text>
        <Text style={styles.title}>
          Como você se descreveria a sua relação com a droga?
        </Text>

        {userDescription.map((type: Type) => (
          <TouchableOpacity
            key={type.id}
            onPress={() => handleSelectItem(type.value)}
            style={
              selectedItems.includes(type.value)
                ? styles.card_hover
                : styles.card
            }
          >
            <View>
              <Text
                style={
                  selectedItems.includes(type.value)
                    ? styles.title_card_hover
                    : styles.title_card
                }
              >
                {type.title}
              </Text>
              <Text
                style={
                  selectedItems.includes(type.value)
                    ? styles.text_hover
                    : styles.text
                }
              >
                {type.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.containerBottom}>
        <RectButton onPress={handleSubmit} style={styles.Button}>
          <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
        </RectButton>
        <RectButton onPress={handleNavigateToHome} style={styles.Button2}>
          <Text style={styles.textButton}>RESPONDER MAIS TARDE</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Question2;
