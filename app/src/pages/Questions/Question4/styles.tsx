import styled from "styled-components/native";
import Colors from "../../../theme/theme";
const ColorTheme = Colors["Theme"];
import { Picker } from "@react-native-picker/picker";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${ColorTheme.White};
`;

export const Text = styled.Text`
  color: ${ColorTheme.Grey75};
  font-size: 14px;
  flex-wrap: wrap;
  text-align: justify;
`;

export const Title = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 28px;
  flex-wrap: wrap;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ContentInputSelect = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: baseline;
`;

export const Input = styled.TextInput`
  width: 40%;
  height: 100px;
  margin-top: 60px;
  padding: 8px;
  font-size: 54px;
  font-weight: bold;
  color: ${ColorTheme.Primary};
  border-color: ${ColorTheme.Grey25};
  border-bottom-width: 1.5px;
  text-align: center;
`;
export const Select = styled(Picker)`
  width: 50px;
  height: 100px;
`;

export const TextSelectedItem = styled.Text`
  height: 100px;
  color: ${ColorTheme.Primary};
  font-size: 54px;
  font-weight: bold;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  padding-horizontal: 20px;
  background-color: ${ColorTheme.White};
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.Pink};
  border-radius: 9px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  margin-bottom: 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
`;

export const ButtonText = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
