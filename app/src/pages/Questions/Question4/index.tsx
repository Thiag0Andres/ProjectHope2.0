import React from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Question4 = () => {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };
  const handleNavigateToQuestion5 = () => {
    navigation.navigate("Question5");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 04 de 05</Text>
        <Text style={styles.title}>Qual sua idade?</Text>
        <View style={styles.content_input_select}>
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.select} keyboardType="numeric" />
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <RectButton onPress={handleNavigateToQuestion5} style={styles.Button}>
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
