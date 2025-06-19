import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HeaderProps = {
  titulo: string;
  subtitulo: string;
};

export default function Header({ titulo , subtitulo}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{titulo}</Text>
         <Text style={styles.headerSubText}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 28,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
  },
  headerText: {
    color: "#4f8cff",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },

    headerSubText: {
    color: "#4f8cff",
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 1,
  },
});