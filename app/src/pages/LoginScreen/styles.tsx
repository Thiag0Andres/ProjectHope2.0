import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${ColorTheme.White};
`;

export const Content = styled.View``;

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

export const ButtonLogin = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.Primary};
  border-radius: 9px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: ${ColorTheme.White};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ButtonTextForgotPassword = styled.Text`
  color: ${ColorTheme.Grey50};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const NewUser = styled.Text`
  color: ${ColorTheme.Grey75};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding-top: 35px;
`;

export const ButtonNewUser = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.White};
  border-color: ${ColorTheme.Primary};
  border-radius: 9px;
  border-width: 2px;
  margin-top: 15px;
`;

export const ButtonTextNewUser = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
