import React from "react";
import { Container, Icon, Text } from "./styles";

const CardText = () => {
  return (
    <Container>
      <Icon
        resizeMode="contain"
        source={require("../../assets/icons/ic_card_quote.png")}
      />
      <Text>Não importa o quão escura seja a noite.</Text>
      <Text>Sua luz nunca se apagará.</Text>
    </Container>
  );
};

export default CardText;
