import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContainerImage,
  Avatar,
  ContainerUserInfo,
  Title,
  Text,
} from "./styles";

interface User {
  name: string;
}

const week = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const month = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Header = () => {
  const navigation = useNavigation();

  const date = new Date();
  const today = date.getDate();
  const day = date.getDay();
  const currentMonth = date.getMonth();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>();

  const Logout = () => {
    AsyncStorage.clear();
    navigation.navigate("LoginScreen");
  };

  const getToken = async () => {
    const token = AsyncStorage.getItem("@CodeApi:token");

    if (token) {
      setToken(String(token));
    }
  };

  const getUser = async () => {
    const user: any = await AsyncStorage.getItem("@CodeApi:user");
    const userParser = JSON.parse(user);

    if (userParser) {
      setUser(userParser);
    }
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  return (
    <Container>
      <ContainerUserInfo>
        {user && <Title>Olá {user.name}</Title>}
        <Text>
          {week[day]}, {today} de {month[currentMonth]}
        </Text>
      </ContainerUserInfo>
      <ContainerImage onPress={Logout}>
        <Avatar
          resizeMode="contain"
          source={require("../../assets/icons/avatar_default.png")}
        />
      </ContainerImage>
    </Container>
  );
};

export default Header;
