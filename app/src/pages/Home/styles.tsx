import styled from "styled-components/native";
import Colors from "../../theme/theme";
const ColorTheme = Colors["Theme"];

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${ColorTheme.White};
`;
