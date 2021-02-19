import React, { useEffect, useState } from "react";

import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import api from "../../../services/api";

interface Type {
  id: number;
  title: string;
  value: string;
  description: string;
  image_url: any;
  image_url_hover: any;
}

const Question1 = () => {
  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
  const [token, setToken] = useState("");
  const [userType, setUserType] = useState<Array<any>>([
    {
      id: 1,
      title: "Dependente",
      value: "dependent",
      description: "Sofro com dependência química e busco ajuda",
      image_url: require("../../../assets/icons/illustration_addicted.png"),
      image_url_hover: require("../../../assets/icons/illustration_addicted_selected.png"),
    },
    {
      id: 2,
      title: "Co-dependente",
      value: "co-dependent",
      description: "Quero ajudar um familiar ou amigo dependente",
      image_url: require("../../../assets/icons/illustration_family.png"),
      image_url_hover: require("../../../assets/icons/illustration_family_selected.png"),
    },
    {
      id: 3,
      title: "Ex-dependente",
      value: "ex-dependent",
      description: "Saí do mundo das drogas e busco ajudar outras pessoas",
      image_url: require("../../../assets/icons/illustration_former.png"),
      image_url_hover: require("../../../assets/icons/illustration_former_selected.png"),
    },
    {
      id: 4,
      title: "Especialista",
      value: "specialist",
      description: "Sou especialista e desejo ajudar mais pessoas",
      image_url: require("../../../assets/icons/illustration_specialist.png"),
      image_url_hover: require("../../../assets/icons/illustration_specialist_selected.png"),
    },
  ]);

  const handleSelectItem = (value: string) => {
    //console.log("teste", value);
    setSelectedItems([value]);
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@CodeApi:token");
    const arr: any = token?.split(" ");

    setToken(String(arr[1]));
  };

  const getUSer = async () => {
    const user = await AsyncStorage.getItem("@CodeApi:users");
    console.log(user);
  };

  useEffect(() => {
    getToken();
    getUSer();
  }, []);

  async function handleSubmit() {
    const body = {
      user_type: selectedItems[0],
    };

    //console.log(body);

    await api
      .put(`/users/update/${4}`, body)
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
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 01 de 05</Text>
        <Text style={styles.title}>
          Com qual destes perfis você mais se identifica?
        </Text>

        {userType.map((type: Type) => (
          <TouchableOpacity
            key={type.id}
            onPress={() => handleSelectItem(type.value)}
            style={
              selectedItems.includes(type.value)
                ? styles.card_hover
                : styles.card
            }
          >
            <Image
              style={styles.icon}
              source={
                selectedItems.includes(type.value)
                  ? type.image_url_hover
                  : type.image_url
              }
            />

            <View style={styles.containerText}>
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
      </View>
    </>
  );
};

export default Question1;
