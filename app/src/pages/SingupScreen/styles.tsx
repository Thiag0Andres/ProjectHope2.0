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

  containerSingupButton: {
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

  containerLogin: {
    width: 320,
    marginTop: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 400,
    height: 180,
  },

  singupButton: {
    width: 320,
    height: 40,
    display: "flex",
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
    width: 320,
    padding: 8,
    fontSize: 14,
    marginTop: 20,
    borderColor: "#E3E3E3",
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
