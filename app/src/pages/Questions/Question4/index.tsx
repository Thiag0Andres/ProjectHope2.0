import React, { useState } from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Picker,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import api from "../../../services/api";

const Question4 = () => {
  const navigation = useNavigation();

  const [timeWithoutDrugs, setTimeWithoutDrugs] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  async function handleSubmit() {
    const time_without_drugs: string =
      setTimeWithoutDrugs + " " + selectedValue;
    const body = {
      time_without_drugs: time_without_drugs,
    };

    //console.log(body);

    await api
      .put(`/users/update/${2}`, body)
      .then(async (response) => {
        console.log(response.data);

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
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 04 de 05</Text>
        <Text style={styles.title}>
          Há quanto tempo você não utiliza drogas?
        </Text>
        <View style={styles.content_input_select}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={timeWithoutDrugs}
            onChangeText={(text) => setTimeWithoutDrugs(text)}
          />
          <Picker
            style={styles.select}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="" value="" />
            <Picker.Item label="Dia" value="dia" />
            <Picker.Item label="Mês" value="mês" />
            <Picker.Item label="Ano" value="ano" />
            <Picker.Item label="" value="" />
          </Picker>
        </View>
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

export default Question4;
