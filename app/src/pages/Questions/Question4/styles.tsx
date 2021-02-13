import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingVertical: 60,
  },

  text: {
    fontSize: 14,
    flexWrap: "wrap",
  },

  title: {
    fontSize: 28,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },
  content_input_select: {
    flexDirection: "row",
  },

  input: {
    marginTop: 20,
    marginRight: 30,
    padding: 8,
    fontSize: 54,
    fontWeight: "bold",
    color: "#4507A1",
    borderColor: "#A6BECF",
    borderBottomWidth: 1.5,
  },

  select: {
    marginTop: 20,
    padding: 8,
    fontSize: 54,
    fontWeight: "bold",
    color: "#4507A1",
    borderColor: "#A6BECF",
    borderBottomWidth: 1.5,
  },

  Button: {
    marginTop: 30,
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
  },

  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4507A1",
  },
});
