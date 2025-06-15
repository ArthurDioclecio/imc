import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export default function Form() {
  const [text, setext] = useState("");
  const [text1, setext1] = useState("");
  const [fim, setFinal] = useState("");
  const [resultado, setResultado] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={text}
        onChangeText={setext}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={text1}
        onChangeText={setext1}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Finalizar"
          color="#4f8cff"
          onPress={() => {
            const res = calculo(text, text1);
            if (res && res < 8.45) {
              setFinal(`Seu IMC é: ${res.toFixed(2)}. Recorde mundial de magreza batido!`);
            } else if (res && res > 185) {
              setFinal(`Seu IMC é: ${res.toFixed(2)}. Recorde mundial de obesidade batido!`);
            } else if (res && res < 16) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta magreza grau III`);
              
            } else if (res && res >= 16 && res < 17) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta magreza grau II`);
              
            } else if (res && res >= 17 && res < 18.5) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta magreza grau I`);
              
            } else if (res && res >= 18.5 && res < 25) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta peso normal`);
              
            } else if (res && res >= 25 && res < 30) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta sobrepeso`);
              
            } else if (res && res >= 30 && res < 35) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta obesidade grau I`);
              
            } else if (res && res >= 35 && res < 40) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta obesidade grau II`);
              
            } else if (res && res >= 40) {
              setFinal(`Seu IMC é: ${res.toFixed(2)} e apresenta obesidade grau III`);
            } else {
              setFinal("Erro ao calcular IMC. Verifique os valores.");
            }
          }}
        />
      </View>
      {fim !== "" && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultado}>{fim}</Text>
        </View>
      )}
    </View>
  );
}

function calculo(text: string, text1: string) {
  let peso = 0;
  let altura = 0;
  try {
    peso = parseFloat(text.replace(",", "."));
    altura = parseFloat(text1.replace(",", "."));
    altura = altura / 100;
    altura = altura * altura;
    let resultado = 0.0;
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
      resultado = peso / altura;
      return resultado;
    }
  } catch (error) {
    console.error("Erro ao calcular:", error);
  }
}

// Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f6fa",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
    elevation: 2,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3a4b",
    marginBottom: 24,
  },
  input: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  resultadoBox: {
    backgroundColor: "#e0f2fe",
    borderRadius: 8,
    padding: 16,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },
  resultado: {
    color: "#2563eb",
    fontSize: 18,
    fontWeight: "bold",
  },
});
