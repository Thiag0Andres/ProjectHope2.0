import styled from "styled-components/native";
import Colors from "../../../theme/theme";
const ColorTheme = Colors["Theme"];

interface IContentClicked {
  isClicked?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${ColorTheme.White};
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const Text = styled.Text<IContentClicked>`
  color: ${({ isClicked }) =>
    isClicked ? ColorTheme.White : ColorTheme.Grey75};
  font-size: 14px;
  flex-wrap: wrap;
  text-align: justify;
`;

export const Title = styled.Text<IContentClicked>`
  color: ${ColorTheme.Primary};
  font-size: 28px;
  flex-wrap: wrap;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Card = styled.TouchableOpacity<IContentClicked>`
  margin-bottom: ${({ isClicked }) => (isClicked ? "20px" : "15px")};
  padding: 20px;
  background-color: ${({ isClicked }) =>
    isClicked ? ColorTheme.Primary : "transparent"};
  border-color: ${({ isClicked }) =>
    isClicked ? "transparent" : ColorTheme.Grey};
  border-radius: 9px;
  border-width: ${({ isClicked }) => (isClicked ? "0px" : "2px")};
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`;

export const TitleCard = styled.Text<IContentClicked>`
  color: ${({ isClicked }) =>
    isClicked ? ColorTheme.White : ColorTheme.Primary};
  font-size: 20px;
  flex-wrap: wrap;
  font-weight: bold;
  margin-bottom: 5px;
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

export const ButtonText = styled.Text`
  color: ${ColorTheme.Primary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
