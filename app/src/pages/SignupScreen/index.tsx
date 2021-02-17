import React, { useState } from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  AsyncStorage,
  Keyboard,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import { styles } from "./styles";

const SignupScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleNavigateToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  async function handleSubmit() {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      const body = {
        name: name,
        email: email.trim().toLocaleLowerCase(),
        password: password,
      };

      //console.log(body);

      await api
        .post("/users/register", body)
        .then(async (response) => {
          //console.log(response.data);

          const { user, token } = response.data;

          //Utiliza o AsyncStorage para guardar o token e o user
          await AsyncStorage.multiSet([
            ["@CodeApi:token", token],
            ["@CodeApi:users", JSON.stringify(user)],
          ]);

          Keyboard.dismiss();

          Alert.alert("", "Cadastro efetuado com sucesso!", [
            {
              text: "Ok",
              //Mudança de página ao apertar o Alert
              onPress: () => navigation.navigate("Question1"),
            },
          ]);
        })
        .catch((error) => {
          console.log("error:", error.response.data.message);
          setErrorMessage(error.response.data.message);
          Alert.alert("", errorMessage, [
            {
              text: "Ok",
            },
          ]);
        });
    } else {
      Alert.alert("", "Senhas precisam ser iguais.", [
        {
          text: "Ok",
        },
      ]);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 25, paddingTop: 60 }}
    >
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logo.png")}
        />
      </View>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#4507A1"
        style={styles.placeholder}
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#4507A1"
        style={styles.placeholder}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
        style={styles.placeholder}
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>

      <TextInput
        placeholder="Confirmar senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
        style={styles.placeholder}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      ></TextInput>

      <RectButton onPress={handleSubmit} style={styles.singupButton}>
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

export default SignupScreen;
