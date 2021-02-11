import React from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const SingupScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
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

      <RectButton style={styles.singupButton} onPress={handleNavigateToLogin}>
        <Text style={styles.textSingupButton}>CADASTRAR</Text>
      </RectButton>

      <View style={styles.containerLogin}>
        <Text style={styles.newUser}>POSSUI CADASTRADO?</Text>

        <TouchableOpacity
          style={styles.newUserButton}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.newUserButtonText}>FAZER LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingupScreen;
