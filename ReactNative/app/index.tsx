import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import CustomButton from "@/components/CustomButton";
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
      <View style={{ alignItems: "center" }}>
        <Header titulo="IMC" /> {/* funciona como header */}
        <Form /> {/* funciona como um body */}
        <Pesquisa /> {/* funciona como um body */}
      </View>
    </ScrollView>
  );
}
