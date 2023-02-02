import React from "react";
import { Container, ContainerImages, Icon } from "./styles";

const TabBar = () => {
  return (
    <Container>
      <ContainerImages>
        <Icon
          resizeMode="contain"
          source={require("../../assets/icons/ic_tab_home_selected.png")}
        />
        <Icon
          resizeMode="contain"
          source={require("../../assets/icons/ic_tab_message.png")}
        />
        <Icon
          resizeMode="contain"
          source={require("../../assets/icons/ic_tab_community.png")}
        />
        <Icon
          resizeMode="contain"
          source={require("../../assets/icons/ic_tab_sos.png")}
        />
      </ContainerImages>
    </Container>
  );
};

export default TabBar;
