import React, { useState } from "react";

import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  AsyncStorage,
  Alert,
  Keyboard,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import { styles } from "./styles";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleNavigateToCreateAccount = () => {
    navigation.navigate("SingupScreen");
  };

  const handleNavigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  async function handleSubmit() {
    const body = {
      email: email.trim().toLocaleLowerCase(),
      password: password,
    };

    //console.log(body);

    await api
      .post("/users/authenticate", body)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }

  /* 
  //Função de Login com os parametros necessários
  const signIn = async (email: string, password: string) => {
    console.log(email, password);
    try {
      //Consome a api
      const response = await api.post("/users/authenticate", {
        email: email,
        password: password,
      });

      //const { user, token } = response.data;

      console.log(response.data);
      
      //Utiliza o AsyncStorage para guardar o token e o user
      await AsyncStorage.multiSet([
        ["@CodeApi:token", token],
        ["@CodeApi:users", JSON.stringify(user)],
      ]);

      //seta os estado do usuário para logado
      //setLoggedInUser(user);

      Keyboard.dismiss();

       
      Alert.alert("", "Login efetuado com sucesso!", [
        {
          text: "Ok",
          //Mudança de página ao apertar o Alert
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } catch (response) {
      setErrorMessage(response.data);
    }
  }; */

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
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#4507A1"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#4507A1"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <RectButton onPress={handleSubmit} style={styles.loginButton}>
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
