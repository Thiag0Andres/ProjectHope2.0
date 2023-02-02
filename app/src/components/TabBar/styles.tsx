import { StyleSheet } from "react-native";

import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.View`
  padding-horizontal: 20px;
  height: 60px;
  background-color: ${ColorTheme.White};
  align-items: center;
  justify-content: center;
`;

export const ContainerImages = styled.View`
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-top-color: ${ColorTheme.Grey};
  border-color: ${ColorTheme.White};
  background-color: ${ColorTheme.White};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;
