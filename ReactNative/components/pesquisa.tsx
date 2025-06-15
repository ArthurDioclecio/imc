import React from "react";
import { View, Text, StyleSheet } from "react-native";

const dados = [
  { emoji: "🧠", 
    texto: "Avaliação do risco à saúde\nSaber o seu IMC ajuda a identificar faixas de risco para doenças crônicas como:\n\nObesidade, hipertensão e diabetes tipo 2\n\nProblemas cardiovasculares\n\nDistúrbios hormonais e ortopédicos\n\nDesnutrição e anemia (em casos de IMC muito baixo)" },
  { emoji: "📊", 
    texto: "Monitoramento do IMC\nO IMC é uma ferramenta útil para monitorar mudanças no peso ao longo do tempo." },
  { emoji: "🧪", 
    texto: "Monitorar o aumento da obesidade na população\nDesenvolver programas de combate à desnutrição\nPrever impactos econômicos do excesso de peso no sistema de saúde" },
  { emoji: "📉 ", 
    texto: "Circunferência abdominal \nPercentual de gordura corporal\nExames laboratoriais e avaliação clínica" },
  { emoji: "✅",  
    texto: "Durante check-ups médicos \nAo iniciar um programa de dieta ou exercício\nAo notar variações repentinas de peso\nComo parte do cuidado preventivo com sua saúde" }, 
  { emoji: "📌", 
    texto: "Saber o seu IMC não é sobre\n  estética, e sim sobre saúde e prevenção. \nEle é um sinal de alerta para que você \n busque manter um peso saudável, com \n equilíbrio alimentar, prática de atividades físicas e, se necessário, apoio profissional." }, 
];

export default function Grid2x6() {
  return (
    <View style={styles.grid}>
      {dados.map((item, i) => (
        <View style={styles.row} key={i}>
          <View style={styles.cellEmoji}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>
          <View style={styles.cellTexto}>
            <Text style={styles.texto}>
              {item.texto.replace(/\n{2,}/g, '\n')}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    margin: 16,
    backgroundColor: "#e0f7fa", // cor suave para todo o grid
    borderRadius: 18,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50
    // Remova o backgroundColor daqui se não quiser cor em cada linha
  },
  cellEmoji: {
    width: 60,
    height: 60,
    backgroundColor: "#e0f2fe",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  cellTexto: {
    justifyContent: "center",
    flex: 1,
  },
  emoji: {
    fontSize: 32,
    color: "#000",
  },
  texto: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
});
