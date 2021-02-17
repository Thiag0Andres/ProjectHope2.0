import React from "react";

import { Image, TextInput, Text, View, ScrollView } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const handleNavigateToChangePassword = () => {
    navigation.navigate("ChangePassword");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 25, paddingTop: 60 }}
    >
      <BorderlessButton
        style={styles.buttonArrow}
        onPress={handleNavigateToLogin}
      >
        <Image
          style={styles.backArrow}
          source={require("../../assets/icons/ic_back.png")}
        />
      </BorderlessButton>

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logo.png")}
        />
      </View>

      <TextInput
        placeholder="Digite seu email para envio do código"
        placeholderTextColor="#4507A1"
        style={styles.placeholder}
      ></TextInput>

      <RectButton
        style={styles.button}
        onPress={handleNavigateToChangePassword}
      >
        <Text style={styles.buttonText}>ENVIAR CÓDIGO</Text>
      </RectButton>
    </ScrollView>
  );
};

export default ForgotPassword;
