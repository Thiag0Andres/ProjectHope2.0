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

const Question2 = () => {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const handleNavigateToQuestion3 = () => {
    navigation.navigate("Question3");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pergunta 02 de 05</Text>
        <Text style={styles.title}>
          Como você se descreveria a sua relação com a droga?
        </Text>
        <View style={styles.card}>
          <View>
            <Text style={styles.titleCard}>Dependente</Text>
            <Text style={styles.text}>
              Sofro com dependência química e busco ajuda
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.titleCard}>Co-dependente</Text>
            <Text style={styles.text}>
              Quero ajudar um familiar ou amigo dependente
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.titleCard}>Ex-dependente</Text>
            <Text style={styles.text}>
              Saí do mundo das drogas e busco ajudar outras pessoas
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerBottom}>
        <RectButton onPress={handleNavigateToQuestion3} style={styles.Button}>
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
