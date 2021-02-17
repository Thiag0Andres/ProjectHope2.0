import React, { useState } from "react";

import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

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
  const [userType, setUserType] = useState<Array<any>>([
    {
      id: 1,
      title: "Dependent",
      value: "dependent",
      description: "Sofro com dependência química e busco ajuda",
      image_url: require("../../../assets/icons/illustration_addicted.png"),
      image_url_hover: require("../../../assets/icons/illustration_addicted_selected.png"),
    },
    {
      id: 2,
      title: "Co-dependent",
      value: "co-dependent",
      description: "Quero ajudar um familiar ou amigo dependente",
      image_url: require("../../../assets/icons/illustration_family.png"),
      image_url_hover: require("../../../assets/icons/illustration_family_selected.png"),
    },
    {
      id: 3,
      title: "Ex-dependent",
      value: "ex-dependent",
      description: "Saí do mundo das drogas e busco ajudar outras pessoas",
      image_url: require("../../../assets/icons/illustration_former.png"),
      image_url_hover: require("../../../assets/icons/illustration_former_selected.png"),
    },
    {
      id: 4,
      title: "Specialist",
      value: "specialist",
      description: "Sou especialista e desejo ajudar mais pessoas",
      image_url: require("../../../assets/icons/illustration_specialist.png"),
      image_url_hover: require("../../../assets/icons/illustration_specialist_selected.png"),
    },
  ]);

  const handleNavigateToQuestion2 = () => {
    navigation.navigate("Question2");
  };

  const handleSelectItem = (value: string) => {
    //console.log("teste", value);
    setSelectedItems([value]);
  };

  console.log(selectedItems);

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 01 de 05</Text>
        <Text style={styles.title}>
          Com qual destes perfis você mais se identifica?
        </Text>

        {userType.map((type: Type) => (
          <TouchableOpacity
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
        <RectButton onPress={handleNavigateToQuestion2} style={styles.Button}>
          <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Question1;
