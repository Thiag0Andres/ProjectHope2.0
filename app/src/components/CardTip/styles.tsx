import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.View`
  padding: 20px;
  margin-bottom: 15px;
  border-color: ${ColorTheme.Grey};
  border-width: 2px;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
`;

export const ContentCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerImage = styled.View`
  margin-right: 20px;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${ColorTheme.Grey75};
  font-size: 20px;
  font-weight: bold;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  color: ${ColorTheme.Grey75};
  font-size: 14px;
  font-weight: 900;
  flex-wrap: wrap;
  text-align: left;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorTheme.Pink};
  border-radius: 9px;
`;

export const ButtonText = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
