import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  textError: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CC0000",
  },

  input: {
    marginTop: 20,
    padding: 8,
    fontSize: 14,
    borderColor: "#E3E3E3",
    borderBottomWidth: 1.5,
  },

  loginButton: {
    marginTop: 30,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#4507A1",
    borderRadius: 9,
  },

  textLoginButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },

  buttonForgotPassword: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  textForgotPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#979696",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  newUser: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
    paddingTop: 35,
  },

  newUserButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 15,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#4507A1",
    backgroundColor: "#FFF",
  },

  textNewUser: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#4507A1",
  },
});
