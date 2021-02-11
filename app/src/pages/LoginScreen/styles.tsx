import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  containeriInputs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLoginButton: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  containerNewAccount: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 400,
    height: 180,
  },

  textError: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CC0000",
  },

  input: {
    borderColor: "#E3E3E3",
    borderBottomWidth: 1.5,
    width: 320,
    marginTop: 20,
    padding: 8,
    fontSize: 14,
  },

  loginButton: {
    width: 320,
    height: 40,
    backgroundColor: "#4507A1",
    marginBottom: 20,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  textLoginButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },

  textForgotPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#979696",
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
    width: 320,
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
