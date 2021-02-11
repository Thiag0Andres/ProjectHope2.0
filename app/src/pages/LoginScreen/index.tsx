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

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 25, paddingVertical: 100 }}
    >
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require("../../icons/logo3.png")} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#4507A1"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
      />

      <RectButton onPress={() => {}} style={styles.loginButton}>
        <Text style={styles.textLoginButton}>ENTRAR</Text>
      </RectButton>
      <TouchableOpacity
        style={styles.buttonForgotPassword}
        onPress={handleNavigateToForgotPassword}
      >
        <Text style={styles.textForgotPassword}>ESQUECI MINHA SENHA</Text>
      </TouchableOpacity>

      <Text style={styles.newUser}>NÃO POSSUI CONTA?</Text>
      <TouchableOpacity
        style={styles.newUserButton}
        onPress={handleNavigateToCreateAccount}
      >
        <Text style={styles.textNewUser}>CRIAR NOVA CONTA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
