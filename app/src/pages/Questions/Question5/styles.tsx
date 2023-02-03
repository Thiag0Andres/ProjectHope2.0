import styled from "styled-components/native";
import Colors from "../../../theme/theme";
const ColorTheme = Colors["Theme"];

interface IContentClicked {
  isClicked?: boolean;
}

export const Container = styled.View`
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

export const Card = styled.TouchableOpacity<IContentClicked>`
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 10px;
  padding: 20px;
  background-color: ${({ isClicked }) =>
    isClicked ? ColorTheme.Primary : "transparent"};
  border-color: ${({ isClicked }) =>
    isClicked ? "transparent" : ColorTheme.Grey};
  border-radius: 9px;
  border-width: ${({ isClicked }) => (isClicked ? "0px" : "2px")};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 70px;
  height: 70px;
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
