import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  form: {
    marginTop: 30,
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  image: {
    alignSelf: "center",
    marginTop: 15,
  },
  adress: {
    flexDirection: "row",
  },
  text: {
    marginTop: 3,
    alignSelf: "flex-start",
    fontFamily: "sans-serif",
    fontSize: 18,
  },
  button: {
    width: "25%",
    backgroundColor: "#8fd18e",
  },
  title: {
    fontSize: 24,
    color: "#5271FF",
    marginLeft: 15,
  },
  caption: {
    marginTop: 3,
    padding: 3,
    fontSize: 15,
    lineHeight: 14,
    color: "#9CA3AF",
    marginLeft: 8,
  },
  icon: {
    marginLeft: 15,
  },
  wrapperbox: {
    borderTopColor: "#232020",
    borderTopWidth: 1,
    borderBottomColor: "#232020",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 100,
    alignItems:"center",
    justifyContent:"center"
  },
  infobox: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  menuItem: {
    alignItems: "center",
    
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#232020",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
