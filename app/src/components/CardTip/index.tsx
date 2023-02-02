import React from "react";
import {
  Container,
  ContentCard,
  ContainerImage,
  ContainerText,
  Icon,
  Title,
  Text,
  Button,
  ButtonText,
} from "./styles";

const CardTip = () => {
  return (
    <Container>
      <ContentCard>
        <ContainerImage>
          <Icon
            resizeMode="contain"
            source={require("../../assets/icons/ic_card_tip.png")}
          />
        </ContainerImage>
        <ContainerText>
          <Title>Dica #1</Title>
          <Text>Evite ficar sozinho ou em más companhias.</Text>
          <Text>
            As más companhias são aquelas que podem lhe introduzir, persuadir a
            voltar ao vício ou largar sua tentativa de abandonar.
          </Text>
        </ContainerText>
      </ContentCard>
      <Button>
        <ButtonText>VER MAIS DICAS</ButtonText>
      </Button>
    </Container>
  );
};

export default CardTip;
