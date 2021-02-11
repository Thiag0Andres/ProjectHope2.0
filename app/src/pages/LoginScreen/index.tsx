import React from "react";

import { Image, TextInput, TouchableOpacity, Text, View } from "react-native";
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
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../icons/logo3.png")} />

      <View style={styles.containeriInputs}>
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
      </View>

      <View style={styles.containerLoginButton}>
        <TouchableOpacity onPress={() => {}} style={styles.loginButton}>
          <Text style={styles.textLoginButton}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigateToForgotPassword}>
          <Text style={styles.textForgotPassword}>ESQUECI MINHA SENHA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNewAccount}>
        <Text style={styles.newUser}>NÃO POSSUI CONTA?</Text>
        <TouchableOpacity
          style={styles.newUserButton}
          onPress={handleNavigateToCreateAccount}
        >
          <Text style={styles.textNewUser}>CRIAR NOVA CONTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
