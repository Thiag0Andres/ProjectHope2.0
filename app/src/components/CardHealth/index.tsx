import React from "react";
import { Container, ContainerText, Icon, Title, Text } from "./styles";

const CardHealth = () => {
  return (
    <Container>
      <ContainerText>
        <Title>Curiosidade</Title>
        <Text>
          Abandonar a susbstância pode te trazer benefícios quase imediatos
        </Text>
        <Text>
          Após 24h, o risco de problemas cardíacos diminui em até XX%.
        </Text>
      </ContainerText>
      <Icon
        resizeMode="contain"
        source={require("../../assets/icons/ic_card_health.png")}
      />
    </Container>
  );
};

export default CardHealth;
