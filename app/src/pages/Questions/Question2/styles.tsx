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
    fontSize: 27,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
  },

  card: {
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E2EAF1",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },

  titleCard: {
    marginBottom: 5,
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#4507A1",
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
