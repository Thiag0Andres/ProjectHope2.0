import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  containerText: {
    flex: 1,
  },

  containerImage: {
    marginRight: 20,
  },

  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 20,
    resizeMode: "contain",
  },

  title: {
    marginBottom: 8,
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    color: "#243336",
  },

  text1: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flexWrap: "wrap",
    color: "#fff",
  },

  text2: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    flexWrap: "wrap",
    color: "#243336",
  },

  card: {
    marginBottom: 20,
    padding: 30,
    backgroundColor: "#4507A1",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  card_tip: {
    marginBottom: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E2EAF1",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  card_health: {
    marginBottom: 15,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E2EAF1",
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  Button: {
    marginTop: 10,
    width: "100%",
    height: 40,
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
