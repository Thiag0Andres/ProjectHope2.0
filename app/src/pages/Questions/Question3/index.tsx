import React, { useState } from "react";

import { TextInput, Text, View, ScrollView, Alert } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../../services/api";

import { styles } from "./styles";

const Question3 = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState("");

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };
  const handleNavigateToQuestion4 = () => {
    navigation.navigate("Question4");
  };

  async function handleSubmit() {
    const body = {
      age: Number(age),
    };

    //console.log(body);

    await api
      .put(`/users/update/${2}`, body)
      .then(async (response) => {
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
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 03 de 05</Text>
        <Text style={styles.title}>Qual sua idade?</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
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

export default Question3;
