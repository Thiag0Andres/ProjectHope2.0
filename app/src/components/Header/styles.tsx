import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.View`
  padding: 20px;
  height: 80px
  background-color: ${ColorTheme.White}; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerImage = styled.TouchableOpacity`
  border-radius: 50px;
  border-width: 3px;
  border-color: ${ColorTheme.Primary};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ContainerUserInfo = styled.View`
  background-color: ${ColorTheme.White};
`;

export const Title = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 20px;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const Text = styled.Text`
  color: ${ColorTheme.Grey75};
  font-size: 14px;
  font-weight: 900;
  flex-wrap: wrap;
  text-align: left;
`;
