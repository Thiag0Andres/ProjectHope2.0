import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.View`
  padding: 30px;
  margin-bottom: 20px;
  background-color: ${ColorTheme.Primary};
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  color: ${ColorTheme.White};
  font-size: 16px;
  font-weight: bold;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 10px;
`;
