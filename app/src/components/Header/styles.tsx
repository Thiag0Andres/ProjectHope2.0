import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  view1: {
    backgroundColor: "#fff",
  },

  view2: {
    backgroundColor: "#fff",
  },

  containerImage: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#4507A1",
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  title: {
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },

  text: {
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    flexWrap: "wrap",
    color: "#243336",
  },
});
