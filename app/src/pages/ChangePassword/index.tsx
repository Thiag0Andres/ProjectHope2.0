import React from "react";

import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  ScrollView,
} from "react-native";
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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonArrow}
        onPress={handleNavigateToLogin}
      >
        <Image
          style={styles.backArrow}
          source={require("../../icons/arrow.png")}
        />
      </TouchableOpacity>

      <Image style={styles.logo} source={require("../../icons/logo3.png")} />

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REDEFINIR SENHA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;
