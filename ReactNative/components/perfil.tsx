import React, { useState } from "react";
<<<<<<< HEAD
import { View, Text, StyleSheet, Image, Button, Alert, TextInput } from "react-native";
=======
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
import { launchImageLibrary } from "react-native-image-picker";

export default function Perfil() {
  const [foto, setFoto] = useState<string>("https://i.pravatar.cc/150");
<<<<<<< HEAD
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
=======
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1

  const escolherFoto = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) return;

      if (response.assets && response.assets.length > 0) {
        const imagemSelecionada = response.assets[0];
        if (imagemSelecionada.uri) {
          setFoto(imagemSelecionada.uri);
<<<<<<< HEAD
=======
          // ta funfando vava
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
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
<<<<<<< HEAD

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
=======
      <Text style={styles.nome}>Nome do Usuário</Text>
      <Text style={styles.email}>usuario@email.com</Text>
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
<<<<<<< HEAD
    paddingHorizontal: 20,
=======
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#e0f7fa",
  },
<<<<<<< HEAD
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
=======
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196f3",
<<<<<<< HEAD
    marginTop: 16,
=======
    marginBottom: 8,
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
  },
  email: {
    fontSize: 16,
    color: "#555",
<<<<<<< HEAD
    marginTop: 4,
=======
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
  },
});
