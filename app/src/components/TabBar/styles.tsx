import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerImages: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderTopColor: "#E2EAF1",
    borderColor: "#fff",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
