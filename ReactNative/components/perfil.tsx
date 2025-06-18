import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default function Perfil() {
  const [foto, setFoto] = useState<string>("https://i.pravatar.cc/150");

  const escolherFoto = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;

      if (response.assets && response.assets.length > 0) {
        const imagemSelecionada = response.assets[0];
        if (imagemSelecionada.uri) {
          setFoto(imagemSelecionada.uri);
          // ta funfando vava
        }
      } else {
        Alert.alert("Erro", "Nenhuma imagem foi selecionada.");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: foto }} style={styles.avatar} />
      <Button title="Alterar Foto" onPress={escolherFoto} />
      <Text style={styles.nome}>Nome do Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>
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
