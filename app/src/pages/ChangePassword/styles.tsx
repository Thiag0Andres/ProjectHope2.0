import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
  },

  containerLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  logo: {
    width: 320,
    height: 180,
  },

  buttonArrow: {
    position: "absolute",
    top: 15,
    left: 20,
  },

  backArrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  errorText: {
    color: "#c4342d",
    fontSize: 14,
    fontWeight: "bold",
  },

  placeholder: {
    marginTop: 20,
    padding: 8,
    fontSize: 14,
    borderColor: "#A6BECF",
    borderBottomWidth: 1.5,
  },

  button: {
    height: 40,
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4507A1",
    borderRadius: 9,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
