import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  containerLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 320,
    height: 180,
  },

  containerLogin: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  singupButton: {
    marginTop: 30,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    backgroundColor: "#4507A1",
  },

  textSingupButton: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  errorText: {
    color: "#c4342d",
    fontSize: 14,
    fontWeight: "bold",
  },

  placeholder: {
    padding: 8,
    fontSize: 14,
    marginTop: 20,
    borderColor: "#A6BECF",
    borderBottomWidth: 1.5,
  },

  newUser: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4507A1",
  },

  newUserButton: {
    width: 130,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#4507A1",
    borderWidth: 2,
    borderRadius: 9,
  },

  newUserButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4507A1",
  },
});
