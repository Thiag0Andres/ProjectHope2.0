import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  buttonArrow: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
  },

  backArrow: {
    width: 40,
    height: 40,
  },

  logo: {
    width: 400,
    height: 180,
    marginBottom: 30,
  },

  errorText: {
    color: "#c4342d",
    fontSize: 14,
    fontWeight: "bold",
  },

  placeholder: {
    width: 320,
    marginTop: 20,
    padding: 8,
    fontSize: 14,
    borderColor: "#E3E3E3",
    borderBottomWidth: 1.5,
  },

  button: {
    width: 320,
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
