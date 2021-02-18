import React from "react";

import { Image, View } from "react-native";

import { styles } from "./styles";

const TabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImages}>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/ic_tab_home_selected.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/ic_tab_message.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/ic_tab_community.png")}
        ></Image>
        <Image
          style={styles.icon}
          source={require("../../assets/icons/ic_tab_sos.png")}
        ></Image>
      </View>
    </View>
  );
};

export default TabBar;
