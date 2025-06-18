import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Perfil from "@/components/perfil";
import Header from "@/components/Header";

export default function PerfilTab() {
 return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4f6fa" }}>
      <View style={{ alignItems: "center", paddingBottom: 32 }}>
        <Header titulo="IMC" /> 
        <Perfil /> 

      </View>
    </ScrollView>
  );
}
