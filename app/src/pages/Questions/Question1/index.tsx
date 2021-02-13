import React from "react";

import { View, ScrollView, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const Question1 = () => {
  const navigation = useNavigation();

  const handleNavigateToQuestion2 = () => {
    navigation.navigate("Question2");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Pergunta 01 de 05</Text>
      <Text style={styles.title}>
        Com qual destes perfis você mais se identifica?
      </Text>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/illustration_addicted.png")}
        />
        <View>
          <Text style={styles.titleCard}>Dependente</Text>
          <Text style={styles.text}>
            Sofro com dependência química e busco ajuda
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/illustration_family.png")}
        />
        <View>
          <Text style={styles.titleCard}>Co-dependente</Text>
          <Text style={styles.text}>
            Quero ajudar um familiar ou amigo dependente
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/illustration_former.png")}
        />
        <View>
          <Text style={styles.titleCard}>Ex-dependente</Text>
          <Text style={styles.text}>
            Saí do mundo das drogas e busco ajudar outras pessoas
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/illustration_specialist.png")}
        />
        <View>
          <Text style={styles.titleCard}>Especialista</Text>
          <Text style={styles.text}>
            Sou especialista e desejo ajudar mais pessoas
          </Text>
        </View>
      </View>
      <RectButton onPress={handleNavigateToQuestion2} style={styles.Button}>
        <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
      </RectButton>
    </ScrollView>
  );
};

export default Question1;
