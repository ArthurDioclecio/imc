import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Alert, TextInput } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default function Perfil() {
  const [foto, setFoto] = useState<string>("https://i.pravatar.cc/150");
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const escolherFoto = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;

      if (response.assets && response.assets.length > 0) {
        const imagemSelecionada = response.assets[0];
        if (imagemSelecionada.uri) {
          setFoto(imagemSelecionada.uri);
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

      <TextInput
        style={styles.input}
        placeholder="Nome do Usuário"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="usuario@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.nome}>{nome || ""}</Text>
      <Text style={styles.email}>{email || ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#e0f7fa",
  },
  input: {
    width: "100%",
    height: 44,
    borderColor: "#2196f3",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196f3",
    marginTop: 16,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
});
