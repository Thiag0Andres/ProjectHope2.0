import React from "react";

import { Image, TextInput, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const SingupScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../icons/logo3.png")} />

      <View style={styles.containeriInputs}>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
        ></TextInput>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#4507A1"
          style={styles.placeholder}
        ></TextInput>

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#4507A1"
          secureTextEntry={true}
          style={styles.placeholder}
        ></TextInput>
      </View>

      <View style={styles.containerSingupButton}>
        <TouchableOpacity
          style={styles.singupButton}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.textSingupButton}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerLogin}>
        <Text style={styles.newUser}>POSSUI CADASTRADO?</Text>

        <TouchableOpacity
          style={styles.newUserButton}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.newUserButtonText}>FAZER LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingupScreen;
