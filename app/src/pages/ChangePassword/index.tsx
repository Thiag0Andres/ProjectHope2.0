import React from "react";

import { Image, TextInput, Text, View, ScrollView } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const ChangePassword = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
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

      <View>
        <TextInput
          placeholder="Digite o código recebido"
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
        ></TextInput>

        <TextInput
          placeholder="Digite sua nova senha"
          secureTextEntry={true}
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
        ></TextInput>
      </View>

      <RectButton style={styles.button}>
        <Text style={styles.buttonText}>REDEFINIR SENHA</Text>
      </RectButton>
    </ScrollView>
  );
};

export default ChangePassword;
