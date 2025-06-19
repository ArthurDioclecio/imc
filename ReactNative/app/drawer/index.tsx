import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
<<<<<<< HEAD
import Perfil from "@/components/perfil";
import Header from "@/components/Header";

export default function PerfilTab() {
 return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4f6fa" }}>
      <View style={{ alignItems: "center", paddingBottom: 32 }}>
        <Header titulo="weight health" subtitulo="veja seu imc"/> 
        <Perfil />

=======
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
      <View style={{ alignItems: "center", paddingBottom: 32 }}>
        <Header titulo="perfil" /> {/* funciona como header */}
       
        <Pesquisa /> {/* funciona como um body */}
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
      </View>
    </ScrollView>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
