import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  text: {
    fontSize: 14,
    color: "#243336",
    textAlign: "justify",
    flexWrap: "wrap",
  },

  title: {
    marginBottom: 20,
    fontSize: 28,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },

  card: {
    flexGrow: 1,
    flexBasis: 0,
    margin: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E2EAF1",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  card_hover: {
    flexGrow: 1,
    flexBasis: 0,
    margin: 10,
    padding: 20,
    backgroundColor: "#4507A1",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
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

  Button2: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    marginBottom: 10,
  },

  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4507A1",
  },
});
