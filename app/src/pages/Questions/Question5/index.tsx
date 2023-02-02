import React, { useEffect, useState } from "react";

import {
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../../services/api";

import { styles } from "./styles";

interface Type {
  id: number;
  value: string;
  image_url: any;
  image_url_hover: any;
}

interface User {
  id: number;
}

const Question5 = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState<User>();
  const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
  const [familyRelationship, setFamilyRelationship] = useState<Array<any>>([
    {
      id: 1,
      value: "angry",
      image_url: require("../../../assets/icons/mood_angry.png"),
      image_url_hover: require("../../../assets/icons/mood_angry_selected.png"),
    },
    {
      id: 2,
      value: "sad",
      image_url: require("../../../assets/icons/mood_sad.png"),
      image_url_hover: require("../../../assets/icons/mood_sad_selected.png"),
    },
    {
      id: 3,
      value: "neutral",
      image_url: require("../../../assets/icons/mood_neutral.png"),
      image_url_hover: require("../../../assets/icons/mood_neutral_selected.png"),
    },
    {
      id: 4,
      value: "happy",
      image_url: require("../../../assets/icons/mood_happy.png"),
      image_url_hover: require("../../../assets/icons/mood_happy_selected.png"),
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
      relationship_family: selectedItems[0],
    };

    //console.log(body);

    await api
      .put(`/users/update/${user?.id}`, body)
      .then(async (response) => {
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
      <View style={styles.container}>
        <Text style={styles.text}>Pergunta 05 de 05</Text>
        <Text style={styles.title}>
          Como você descreveria a sua relação com a família?
        </Text>
        <FlatList
          data={familyRelationship}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSelectItem(item.value)}
                style={
                  selectedItems.includes(item.value)
                    ? styles.card_hover
                    : styles.card
                }
              >
                <Image
                  style={styles.icon}
                  source={
                    selectedItems.includes(item.value)
                      ? item.image_url_hover
                      : item.image_url
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.containerBottom}>
        <RectButton onPress={handleSubmit} style={styles.Button}>
          <Text style={styles.textButton}>CONCLUIR QUESTIONÁRIO</Text>
        </RectButton>
        <RectButton onPress={handleNavigateToHome} style={styles.Button2}>
          <Text style={styles.textButton}>RESPONDER MAIS TARDE</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Question5;
