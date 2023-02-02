import React from "react";
import {
  Header,
  TabBar,
  CardText,
  CardHealth,
  CardTip,
} from "../../components";
import { Container } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CardText />
        <CardHealth />
        <CardTip />

        <CardText />
        <CardHealth />
        <CardTip />
      </Container>
      <TabBar />
    </>
  );
};

export default Home;
