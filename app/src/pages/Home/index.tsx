import React, { useEffect, useState } from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import Header from "../../components/Header";
import TabBar from "../../components/TabBar";

const Home = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [user, setUser] = useState();

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@CodeApi:token");
    setToken(String(token));
  };

  const getUSer = async () => {
    const user = await AsyncStorage.getItem("@CodeApi:users");
  };

  useEffect(() => {
    getToken();
    getUSer();
  }, []);

  //console.log("token", token);
  //console.log("token", token);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/ic_card_quote.png")}
          ></Image>
          <Text style={styles.text1}>
            Não importa o quão escura seja a noite.
          </Text>
          <Text style={styles.text1}>Sua luz nunca se apagará.</Text>
        </View>
        <View style={styles.card_health}>
          <View style={styles.containerText}>
            <Text style={styles.title}>Curiosidade</Text>
            <Text style={styles.text2}>
              Abandonar a susbstância pode te trazer benefícios quase imediatos
            </Text>
            <Text style={styles.text2}>
              Após 24h, o risco de problemas cardíacos diminui em até XX%.
            </Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/ic_card_health.png")}
          ></Image>
        </View>

        <View style={styles.card_tip}>
          <View style={styles.containerCard}>
            <View style={styles.containerImage}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/ic_card_tip.png")}
              ></Image>
            </View>
            <View style={styles.containerText}>
              <Text style={styles.title}>Dica #1</Text>
              <Text style={styles.text2}>
                Evite ficar sozinho ou em más companhias.
              </Text>
              <Text style={styles.text2}>
                As más companhias são aquelas que podem lhe introduzir,
                persuadir a voltar ao vício ou largar sua tentativa de
                abandonar.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.textButton}>VER MAIS DICAS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/ic_card_quote.png")}
          ></Image>
          <Text style={styles.text1}>
            Não importa o quão escura seja a noite.
          </Text>
          <Text style={styles.text1}>Sua luz nunca se apagará.</Text>
        </View>
        <View style={styles.card_health}>
          <View style={styles.containerText}>
            <Text style={styles.title}>Curiosidade</Text>
            <Text style={styles.text2}>
              Abandonar a susbstância pode te trazer benefícios quase imediatos
            </Text>
            <Text style={styles.text2}>
              Após 24h, o risco de problemas cardíacos diminui em até XX%.
            </Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/ic_card_health.png")}
          ></Image>
        </View>

        <View style={styles.card_tip}>
          <View style={styles.containerCard}>
            <View style={styles.containerImage}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/ic_card_tip.png")}
              ></Image>
            </View>
            <View style={styles.containerText}>
              <Text style={styles.title}>Dica #1</Text>
              <Text style={styles.text2}>
                Evite ficar sozinho ou em más companhias.
              </Text>
              <Text style={styles.text2}>
                As más companhias são aquelas que podem lhe introduzir,
                persuadir a voltar ao vício ou largar sua tentativa de
                abandonar.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.textButton}>VER MAIS DICAS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabBar />
    </>
  );
};

export default Home;
