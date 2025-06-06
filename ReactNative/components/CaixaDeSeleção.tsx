import React, { useState } from "react";
import { Switch, Text, View, StyleSheet } from "react-native";

export default function App() {
  // Definindo o estado do switch (se está ativado ou desativado)
  const [isEnabled, setIsEnabled] = useState(false);

  // Função para alternar o estado do switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Caixa de Seleção com Switch:</Text>

      {/* Exibindo o Switch */}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}  // Cores de fundo (quando desligado/ligado)
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}  // Cor do círculo
        onValueChange={toggleSwitch}  // Função chamada ao alterar o estado
        value={isEnabled}  // Valor atual do Switch
      />

      {/* Exibindo o status atual do Switch */}
      <Text style={styles.status}>
        O Switch está {isEnabled ? "Ligado" : "Desligado"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginTop: 20,
    color: "gray",
  },
});
