import React from "react";

import { TextInput, Text, View, ScrollView } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Question3 = () => {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };
  const handleNavigateToQuestion4 = () => {
    navigation.navigate("Question4");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Pergunta 03 de 05</Text>
      <Text style={styles.title}>Qual sua idade?</Text>

      <TextInput style={styles.input} keyboardType="numeric" />

      <RectButton onPress={handleNavigateToQuestion4} style={styles.Button}>
        <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
      </RectButton>
      <RectButton onPress={handleNavigateToHome} style={styles.Button2}>
        <Text style={styles.textButton}>RESPONDER MAIS TARDE</Text>
      </RectButton>
    </ScrollView>
  );
};

export default Question3;
