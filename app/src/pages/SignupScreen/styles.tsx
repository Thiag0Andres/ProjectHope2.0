import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${ColorTheme.White};
`;

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 320px;
  height: 180px;
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

export const ButtonSingup = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.Primary};
  border-radius: 9px;
  margin-top: 30px;
`;

export const ButtonTextSingup = styled.Text`
  color: ${ColorTheme.White};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ContainerLogin = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BackToLogin = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonBackToLogin = styled.TouchableOpacity`
  width: 130px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-color: ${ColorTheme.Primary};
  border-radius: 9px;
  border-width: 2px;
`;

export const ButtonTextBackToLogin = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
