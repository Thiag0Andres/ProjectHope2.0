import React from "react";

import {
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  AsyncStorage,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
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

      <TextInput
        placeholder="Digite seu email para envio do código"
        placeholderTextColor="#4507A1"
        style={styles.placeholder}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>ENVIAR CÓDIGO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
