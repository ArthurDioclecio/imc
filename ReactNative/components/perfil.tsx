import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150" }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Nome do Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>
      {/* Adicione mais informações do perfil aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#e0f7fa",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196f3",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#555",
  },
});