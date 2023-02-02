import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { iStore } from "../../store";
import { removeUser } from "../../store/ducks/user/actions";

import {
  Container,
  ContainerImage,
  Avatar,
  ContainerUserInfo,
  Title,
  Text,
} from "./styles";

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((store: iStore) => store.user);

  const date = new Date();
  const today = date.getDate();
  const day = date.getDay();
  const currentMonth = date.getMonth();

  const Logout = () => {
    dispatch(removeUser());
    navigation.navigate("LoginScreen");
  };

  console.log(user);

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
