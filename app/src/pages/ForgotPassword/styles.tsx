import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${ColorTheme.White};
  position: relative;
`;

export const ContainerLogo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  width: 320px;
  height: 180px;
`;

export const ButtonArrow = styled(BorderlessButton)`
  position: absolute;
  top: 15px;
  left: 20px;
`;

export const BackArrow = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ErrorText = styled.Text`
  color: ${ColorTheme.Red};
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  margin-top: 20px;
  padding: 8px;
  font-size: 14px;
  color: ${ColorTheme.Grey75};
  border-color: ${ColorTheme.Grey25};
  border-bottom-width: 1.5px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.Primary};
  border-radius: 9px;
`;

export const ButtonText = styled.Text`
  color: ${ColorTheme.White};
  font-size: 14px;
  font-weight: bold;
`;
