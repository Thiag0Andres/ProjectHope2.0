import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  containerText: {
    flex: 1,
  },

  text: {
    fontSize: 14,
    textAlign: "justify",
    flexWrap: "wrap",
    color: "#000",
  },

  text_hover: {
    fontSize: 14,
    textAlign: "justify",
    flexWrap: "wrap",
    color: "#fff",
  },

  title: {
    marginBottom: 20,
    fontSize: 28,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },

  card: {
    marginBottom: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E2EAF1",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },

  card_hover: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#4507A1",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 70,
    height: 70,
    marginRight: 20,
    resizeMode: "contain",
  },

  title_card: {
    marginBottom: 5,
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },

  title_card_hover: {
    marginBottom: 5,
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#fff",
  },

  containerBottom: {
    width: "100%",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },

  Button: {
    marginTop: 10,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#EDE1FF",
    borderRadius: 9,
  },

  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4507A1",
  },
});
