import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "@/components/Header";
import Form from "@/components/form";
import Pesquisa from "@/components/pesquisa";

type CapsLockProps = {
  texto: string;
};

function CapsLock({ texto }: CapsLockProps) {
  const textoCapsLock = texto.toUpperCase();
  return <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 16 }}>{textoCapsLock}</Text>;
}

export default function TabHome() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("tutu");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4f6fa" }}>
      <View style={{ alignItems: "center", paddingBottom: 32 }}>
        <Header titulo="imc" subtitulo="insira eu calcule" /> {/*header */}
        <Form /> {/*body */}
        <Pesquisa /> {/*body */}
      </View>
    </ScrollView>
  );
}

